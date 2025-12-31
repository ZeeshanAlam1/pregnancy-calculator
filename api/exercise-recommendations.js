export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { weeks, days, language } = req.body;

  if (!weeks || weeks < 0 || weeks > 42) {
    return res.status(400).json({ error: 'Invalid weeks parameter' });
  }

  // Check if API key is configured
  const apiKey = process.env.ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    // Return fallback data when API key is not configured
    return res.status(200).json(getFallbackExercises(weeks, days, language));
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        messages: [
          {
            role: 'user',
            content: `You are a prenatal fitness expert. Provide safe exercise recommendations for a pregnant woman at ${weeks} weeks and ${days} days of pregnancy.

IMPORTANT: Respond in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi (Devanagari script)' : language === 'ar' ? 'Arabic' : 'Urdu'} language.

Please respond ONLY with a JSON object (no markdown, no backticks, no preamble) with this exact structure:
{
  "intro": "Brief introduction about exercise at this stage in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : language === 'ar' ? 'Arabic' : 'Urdu'} (2-3 sentences)",
  "exercises": [
    {
      "name": "Exercise name",
      "emoji": "relevant emoji",
      "description": "How to do it",
      "benefits": "Benefits"
    }
  ]
}

Provide 4-5 safe exercises appropriate for ${weeks} weeks of pregnancy. Consider trimester-specific needs.`
          }
        ]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'API request failed');
    }

    const responseText = data.content
      .filter(block => block.type === 'text')
      .map(block => block.text)
      .join('\n')
      .trim();

    const exerciseData = JSON.parse(responseText);
    return res.status(200).json(exerciseData);

  } catch (error) {
    console.error('Error:', error);
    return res.status(200).json(getFallbackExercises(weeks, days, language));
  }
}

function getFallbackExercises(weeks, days, language) {
  const fallbackData = {
    en: {
      intro: `At ${weeks} weeks, gentle exercise is beneficial for both you and your baby. Here are some safe activities recommended for this stage of pregnancy.`,
      exercises: [
        { emoji: '🚶‍♀️', name: 'Walking', description: 'Walk at a comfortable pace for 20-30 minutes daily.', benefits: 'Improves circulation, maintains fitness, and is safe throughout pregnancy.' },
        { emoji: '🧘‍♀️', name: 'Prenatal Yoga', description: 'Gentle stretches and breathing exercises designed for pregnancy.', benefits: 'Reduces stress, improves flexibility, and helps with breathing during labor.' },
        { emoji: '🏊‍♀️', name: 'Swimming', description: 'Swim or do water aerobics in a comfortable temperature pool.', benefits: 'Low-impact exercise that supports your weight and reduces swelling.' },
        { emoji: '💪', name: 'Pelvic Floor Exercises', description: 'Practice Kegel exercises by tightening pelvic muscles for 5-10 seconds.', benefits: 'Strengthens muscles for labor and recovery, prevents incontinence.' }
      ]
    },
    hi: {
      intro: `${weeks} सप्ताह में, हल्का व्यायाम आपके और आपके बच्चे दोनों के लिए लाभदायक है। यहां गर्भावस्था के इस चरण के लिए कुछ सुरक्षित गतिविधियां दी गई हैं।`,
      exercises: [
        { emoji: '🚶‍♀️', name: 'चलना', description: 'आरामदायक गति से प्रतिदिन 20-30 मिनट चलें।', benefits: 'रक्त संचार में सुधार, फिटनेस बनाए रखना, और पूरी गर्भावस्था में सुरक्षित।' },
        { emoji: '🧘‍♀️', name: 'प्रसव पूर्व योग', description: 'गर्भावस्था के लिए डिज़ाइन किए गए कोमल खिंचाव और श्वास व्यायाम।', benefits: 'तनाव कम करता है, लचीलापन बढ़ाता है, और प्रसव के दौरान श्वास में मदद करता है।' },
        { emoji: '🏊‍♀️', name: 'तैराकी', description: 'आरामदायक तापमान वाले पूल में तैराकी या वाटर एरोबिक्स करें।', benefits: 'कम प्रभाव वाला व्यायाम जो आपके वजन का समर्थन करता है और सूजन कम करता है।' },
        { emoji: '💪', name: 'पेल्विक फ्लोर व्यायाम', description: 'श्रोणि की मांसपेशियों को 5-10 सेकंड के लिए कसकर केगेल व्यायाम का अभ्यास करें।', benefits: 'प्रसव और रिकवरी के लिए मांसपेशियों को मजबूत करता है, असंयम को रोकता है।' }
      ]
    },
    ar: {
      intro: `في الأسبوع ${weeks}، التمارين اللطيفة مفيدة لك ولطفلك. إليك بعض الأنشطة الآمنة الموصى بها لهذه المرحلة من الحمل.`,
      exercises: [
        { emoji: '🚶‍♀️', name: 'المشي', description: 'امشي بوتيرة مريحة لمدة 20-30 دقيقة يومياً.', benefits: 'يحسن الدورة الدموية، يحافظ على اللياقة، وآمن طوال فترة الحمل.' },
        { emoji: '🧘‍♀️', name: 'يوغا ما قبل الولادة', description: 'تمارين التمدد اللطيفة والتنفس المصممة للحمل.', benefits: 'يقلل التوتر، يحسن المرونة، ويساعد في التنفس أثناء المخاض.' },
        { emoji: '🏊‍♀️', name: 'السباحة', description: 'اسبحي أو مارسي التمارين المائية في مسبح بدرجة حرارة مريحة.', benefits: 'تمرين منخفض التأثير يدعم وزنك ويقلل التورم.' },
        { emoji: '💪', name: 'تمارين قاع الحوض', description: 'مارسي تمارين كيجل من خلال شد عضلات الحوض لمدة 5-10 ثوانٍ.', benefits: 'يقوي العضلات للمخاض والتعافي، يمنع سلس البول.' }
      ]
    },
    ur: {
      intro: `${weeks} ہفتے میں، ہلکی ورزش آپ اور آپ کے بچے دونوں کے لیے فائدہ مند ہے۔ یہاں حمل کے اس مرحلے کے لیے کچھ محفوظ سرگرمیاں ہیں۔`,
      exercises: [
        { emoji: '🚶‍♀️', name: 'چلنا', description: 'روزانہ 20-30 منٹ آرام دہ رفتار سے چلیں۔', benefits: 'خون کی گردش بہتر بناتا ہے، تندرستی برقرار رکھتا ہے، اور پوری حمل میں محفوظ ہے۔' },
        { emoji: '🧘‍♀️', name: 'زچگی سے پہلے یوگا', description: 'حمل کے لیے ڈیزائن کیے گئے نرم کھینچاؤ اور سانس کی مشقیں۔', benefits: 'تناؤ کم کرتا ہے، لچک بڑھاتا ہے، اور زچگی کے دوران سانس لینے میں مدد کرتا ہے۔' },
        { emoji: '🏊‍♀️', name: 'تیراکی', description: 'آرام دہ درجہ حرارت والے پول میں تیراکی یا واٹر ایروبکس کریں۔', benefits: 'کم اثر والی ورزش جو آپ کے وزن کو سہارا دیتی ہے اور سوجن کم کرتی ہے۔' },
        { emoji: '💪', name: 'پیلوک فلور ورزشیں', description: 'شرونی کے پٹھوں کو 5-10 سیکنڈ تک سخت کرکے کیگل ورزش کی مشق کریں۔', benefits: 'زچگی اور بحالی کے لیے پٹھوں کو مضبوط بناتا ہے، پیشاب کی بے ضابطگی سے بچاتا ہے۔' }
      ]
    }
  };

  return fallbackData[language] || fallbackData.en;
}
