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
    return res.status(200).json(getFallbackData(weeks, days, language));
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
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: `You are a prenatal development expert. Provide detailed information about fetal development at ${weeks} weeks and ${days} days of pregnancy.

IMPORTANT: Respond in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi (Devanagari script)' : language === 'ar' ? 'Arabic' : 'Urdu'} language.

Please respond ONLY with a JSON object (no markdown, no backticks, no preamble) with this exact structure:
{
  "icon": "single emoji representing the baby at this stage",
  "length": "length in cm or mm as string with unit in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : language === 'ar' ? 'Arabic' : 'Urdu'}",
  "weight": "weight in grams as string with unit in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : language === 'ar' ? 'Arabic' : 'Urdu'}",
  "comparison": "comparison to a fruit/vegetable with emoji and text in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : language === 'ar' ? 'Arabic' : 'Urdu'}",
  "title": "Week X: Brief descriptive title in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : language === 'ar' ? 'Arabic' : 'Urdu'}",
  "description": "2-3 sentence description in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : language === 'ar' ? 'Arabic' : 'Urdu'}",
  "developments": ["development 1", "development 2", "development 3", "development 4"]
}

Be medically accurate and supportive in tone. All text must be in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi (Devanagari)' : language === 'ar' ? 'Arabic' : 'Urdu'}.`
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

    const babyData = JSON.parse(responseText);
    return res.status(200).json(babyData);

  } catch (error) {
    console.error('Error:', error);
    // Return fallback data on error
    return res.status(200).json(getFallbackData(weeks, days, language));
  }
}

function getFallbackData(weeks, days, language) {
  const fallbackData = {
    en: {
      icon: '👶',
      title: `Week ${weeks}: Baby Development`,
      description: `At ${weeks} weeks and ${days} days, your baby is growing and developing rapidly. Each week brings new milestones!`,
      length: 'Varies',
      weight: 'Varies',
      comparison: '🤱 Growing strong',
      developments: [
        'Organs are developing and maturing',
        'Brain is forming neural connections',
        'Baby is active and growing',
        'Preparing for life outside the womb'
      ]
    },
    hi: {
      icon: '👶',
      title: `सप्ताह ${weeks}: बच्चे का विकास`,
      description: `${weeks} सप्ताह और ${days} दिन पर, आपका बच्चा तेजी से बढ़ रहा है और विकसित हो रहा है। प्रत्येक सप्ताह नए मील के पत्थर लाता है!`,
      length: 'भिन्न होता है',
      weight: 'भिन्न होता है',
      comparison: '🤱 मजबूत हो रहा है',
      developments: [
        'अंग विकसित और परिपक्व हो रहे हैं',
        'मस्तिष्क तंत्रिका कनेक्शन बना रहा है',
        'बच्चा सक्रिय है और बढ़ रहा है',
        'गर्भ के बाहर जीवन के लिए तैयारी कर रहा है'
      ]
    },
    ar: {
      icon: '👶',
      title: `الأسبوع ${weeks}: نمو الطفل`,
      description: `في ${weeks} أسبوعًا و ${days} أيام، ينمو طفلك ويتطور بسرعة. كل أسبوع يجلب معالم جديدة!`,
      length: 'يختلف',
      weight: 'يختلف',
      comparison: '🤱 ينمو بقوة',
      developments: [
        'الأعضاء تتطور وتنضج',
        'الدماغ يشكل الروابط العصبية',
        'الطفل نشط وينمو',
        'يستعد للحياة خارج الرحم'
      ]
    },
    ur: {
      icon: '👶',
      title: `ہفتہ ${weeks}: بچے کی نشوونما`,
      description: `${weeks} ہفتے اور ${days} دن پر، آپ کا بچہ تیزی سے بڑھ رہا ہے اور ترقی کر رہا ہے۔ ہر ہفتہ نئے سنگ میل لاتا ہے!`,
      length: 'مختلف ہوتا ہے',
      weight: 'مختلف ہوتا ہے',
      comparison: '🤱 مضبوط ہو رہا ہے',
      developments: [
        'اعضاء ترقی اور پختہ ہو رہے ہیں',
        'دماغ اعصابی روابط بنا رہا ہے',
        'بچہ فعال ہے اور بڑھ رہا ہے',
        'رحم سے باہر زندگی کے لیے تیاری کر رہا ہے'
      ]
    }
  };

  return fallbackData[language] || fallbackData.en;
}
