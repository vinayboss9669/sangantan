import React, { useState, useEffect, useRef } from 'react';
import './Rules.css';
import AgreementContainer from './Agreement';

interface Rule {
  hindi: string;
  english: string;
  detail_hi: string;
  detail_en: string;
}

const RulesContainer: React.FC = () => {
  const [agreed, setAgreed] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(120);
  const [timerDone, setTimerDone] = useState<boolean>(false);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const rulesEndRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const rules: Rule[] = [
    {
    hindi: "जो मनुष्य इंसानियत को जाति-धर्म से ऊपर मानते हैं",
    english: "Those who place humanity above caste and religion.",
    detail_hi: "ऐसे लोग जो मानवता को किसी भी जाति, धर्म, भाषा, या क्षेत्रीय भेदभाव से ऊपर मानते हैं। वे सभी इंसानों को समान दृष्टि से देखते हैं और दूसरों की मदद को अपना कर्तव्य समझते हैं।",
    detail_en: "They do not discriminate based on religion, caste, language, or region and treat every human being with equality and compassion."
  },
  {
    hindi: "जो मनुष्य धर्मनिरपेक्ष हैं",
    english: "Those who are secular in thought and action.",
    detail_hi: "धर्मनिरपेक्षता का अर्थ है – धर्म को सरकार और सार्वजनिक जीवन से अलग रखना। ऐसे व्यक्ति सभी धर्मों को समान दृष्टि से देखते हैं और धार्मिक स्वतंत्रता व समानता में विश्वास करते हैं।",
    detail_en: "Secular individuals believe religion should remain personal and not interfere in public policy. They treat all religions equally or follow none."
  },
  {
    hindi: "जो ईमानदारी, सत्यता, निष्कपटता और प्रमाणिकता में विश्वास रखते हैं",
    english: "Those who believe in honesty, truth, sincerity, and authenticity.",
    detail_hi: "ऐसे लोग अपने विचारों, कार्यों और जीवनशैली में सत्य और ईमानदारी को प्राथमिकता देते हैं। वे धोखा, छल और झूठ से दूर रहते हैं।",
    detail_en: "Such people value truthfulness in thoughts, speech, and actions. They are genuine and trustworthy in personal and social behavior."
  },
  {
    hindi: "जो शुद्ध अन्तःकरण और धर्मशीलता रखते हैं और सत्य की रक्षा करते हैं",
    english: "Those who uphold a pure conscience, morality, and stand for truth.",
    detail_hi: "वे व्यक्ति जिनका अंतर्मन साफ होता है, जो नैतिकता को महत्व देते हैं और हर परिस्थिति में सत्य का साथ देते हैं।",
    detail_en: "They prioritize ethical values and always support the truth, even when it's difficult."
  },
  {
    hindi: "जो मानवतावादी होते हैं",
    english: "Those who are humanists.",
    detail_hi: "मानवतावादी वे लोग होते हैं जो धार्मिक मान्यताओं की बजाय तर्क, अनुभव और नैतिकता को मूल आधार मानते हैं। वे अंधविश्वास से दूर रहते हैं।",
    detail_en: "Humanists believe in logic, ethics, and human welfare instead of blind beliefs or religious dogmas."
  },
  {
    hindi: "जो सर्व-धर्म-समभाव रखते हैं",
    english: "Those who believe in 'Sarva-Dharma-Sambhava'.",
    detail_hi: "ऐसे लोग सभी धर्मों को समान दृष्टि से देखते हैं और किसी एक धर्म को श्रेष्ठ नहीं मानते। वे सहिष्णुता और धार्मिक एकता में विश्वास करते हैं।",
    detail_en: "They promote harmony among all religions and never claim superiority of one faith over others."
  },
  {
    hindi: "जो मर्यादित भाषा एवं आदरपूर्वक संवाद करते हों",
    english: "Those who communicate respectfully.",
    detail_hi: "ऐसे सदस्य जो दूसरों के साथ सम्मानजनक, शालीन और शांतिपूर्ण ढंग से बातचीत करते हैं। अपमानजनक शब्दों, गालियों या धमकी की अनुमति नहीं है।",
    detail_en: "They avoid hate speech, abuse, and insults. Respectful dialogue is the foundation of this community."
  },
  {
    hindi: "जो किसी भी राजनीतिक या धार्मिक प्रचार से दूर रहते हों",
    english: "Those who do not engage in political or religious propaganda.",
    detail_hi: "यह मंच किसी पार्टी या मजहबी संगठन का प्रचार केंद्र नहीं है। सदस्य अपनी निजी आस्था रख सकते हैं पर प्रचार और दबाव अस्वीकार्य है।",
    detail_en: "This platform is neutral and not meant to promote ideologies. Faith is personal, not for imposition."
  },
  {
    hindi: "जो वैज्ञानिक सोच और तर्क को महत्व देते हों",
    english: "Those who value scientific temper and rational thinking.",
    detail_hi: "ऐसे सदस्य जो किसी भी जानकारी को तर्क, विज्ञान और प्रमाण के आधार पर परखते हैं और अंधविश्वास से बचते हैं।",
    detail_en: "They ask questions, seek evidence, and avoid superstition. Logic and facts matter most."
  },
  {
    hindi: "जो दूसरों की गोपनीयता का सम्मान करते हों",
    english: "Those who respect others’ privacy.",
    detail_hi: "कोई भी सदस्य किसी अन्य का निजी डाटा, फोटो या संवाद बिना अनुमति साझा नहीं करेगा।",
    detail_en: "Sharing someone's private information without permission is strictly prohibited."
  },
  {
    hindi: "जो रचनात्मक और सकारात्मक योगदान देते हों",
    english: "Those who contribute constructively.",
    detail_hi: "ऐसे सदस्य जो विचार, समाधान और प्रेरणा देते हैं — न कि सिर्फ आलोचना और नकारात्मकता।",
    detail_en: "They build, not break. Criticism is welcome only when it's respectful and solution-oriented."
  },
  {
    hindi: "जो किसी भी प्रकार का भेदभाव नहीं करते हों",
    english: "Those who do not discriminate.",
    detail_hi: "धर्म, जाति, लिंग, भाषा, क्षेत्र, क्षमता या आर्थिक स्थिति के आधार पर भेदभाव नहीं किया जाएगा।",
    detail_en: "All members are equal regardless of background, gender, or belief."
  },
  {
    hindi: "जो समुदाय के हित को प्राथमिकता देते हों",
    english: "Those who prioritize community over self-interest.",
    detail_hi: "ऐसे सदस्य जो अपने व्यक्तिगत स्वार्थ से ऊपर उठकर समुदाय की भलाई के लिए कार्य करते हैं।",
    detail_en: "They act for the collective good rather than personal fame or power."
  },
  {
    hindi: "जो 18 वर्ष या उससे अधिक आयु के हों",
    english: "Those who are 18 years or older.",
    detail_hi: "समाजिक जागरूकता, तर्कशीलता और ज़िम्मेदारी के लिए यह न्यूनतम उम्र आवश्यक है।",
    detail_en: "This ensures maturity and responsible participation in community matters."
  },
  {
    hindi: "जो बिना अनुमति कोई व्यवसायिक प्रचार न करें",
    english: "Those who do not promote businesses without permission.",
    detail_hi: "किसी भी उत्पाद, सेवा या ब्रांड का प्रमोशन तभी किया जाए जब इसकी अनुमति प्राप्त हो।",
    detail_en: "This keeps the platform clean, focused, and non-commercial."
  },
  {
    hindi: "जो भारतीय संविधान का पालन करते हैं",
    english: "Those who respect and abide by the Constitution of India.",
    detail_hi: "ऐसे लोग जो संविधान में निहित मूलभूत अधिकारों और कर्तव्यों का सम्मान करते हैं और राष्ट्र की एकता, अखंडता और लोकतंत्र में विश्वास रखते हैं।",
    detail_en: "Such individuals value constitutional principles like equality, liberty, and secularism, and uphold democratic values and duties as responsible citizens."
  }    
];

  // Check if user has already agreed
  useEffect(() => {
    const savedAgreement = localStorage.getItem('rulesAgreement');
    
    if (savedAgreement) {
      setAgreed(true);
      setTimerDone(true);
      setTimerStarted(true);
    }
  }, []);

  // Set up intersection observer to detect when user scrolls to the bottom of rules
  useEffect(() => {
    if (!timerStarted && !timerDone) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // Start the timer only when the user has scrolled to the end of rules
            setTimerStarted(true);
          }
        },
        { threshold: 0.5 }
      );

      if (rulesEndRef.current) {
        observer.observe(rulesEndRef.current);
      }

      return () => {
        if (rulesEndRef.current) {
          observer.unobserve(rulesEndRef.current);
        }
      };
    }
  }, [timerStarted, timerDone]);

  // Start timer only when timerStarted is true
  useEffect(() => {
    if (timerStarted && !timerDone && !agreed) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            setTimerDone(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [timerStarted, timerDone, agreed]);

  const handleAgree = () => {
    if (timerDone && !agreed) {
      setAgreed(true);
      localStorage.setItem('rulesAgreement', 'true');
    }
  };

  return (
    <div className="container">
      <h1 className="center">🌐 Add Community – Join Rules</h1>
      <p className="subtitle">
        केवल वही व्यक्ति इस वेब कम्युनिटी का हिस्सा बन सकते हैं जो निम्नलिखित सिद्धांतों को मानते हों: <br />
        <em>Only those individuals are eligible to join this web community who believe in the following principles:</em>
      </p>

      <div className="rules-list">
        {rules.map((rule, index) => (
          <div className="rule-card" key={index}>
            <div className="rule-title">
              Rule {index + 1}. {rule.hindi} / {rule.english}
            </div>
            <div className="rule-hindi">📌 {rule.detail_hi}</div>
            <div className="rule-english">💬 {rule.detail_en}</div>
          </div>
        ))}
      </div>
      
      {/* This div serves as a marker for when user has viewed all rules */}
      <div ref={rulesEndRef} className="rules-end-marker"></div>

      {/* Status indicator for timer */}
      {!agreed && (
        <div className="timer-status">
          {!timerStarted && (
            <p className="scroll-prompt">
              ⬇️ Please scroll down to review all the rules to start the timer ⬇️
            </p>
          )}
          {timerStarted && !timerDone && (
            <p className="timer-running">
              ⏱️ Timer started: {Math.floor(timerSeconds / 60)}:{String(timerSeconds % 60).padStart(2, '0')} remaining
            </p>
          )}
        </div>
      )}

      <AgreementContainer 
        timerDone={timerDone} 
        timerStarted={timerStarted}
        timerSeconds={timerSeconds}
      />
    </div>
  );
};

export default RulesContainer;