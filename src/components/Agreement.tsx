import React, { useState } from 'react';
import './Agreement.css';

interface AgreementContainerProps {
  timerDone: boolean;
  timerStarted: boolean;
  timerSeconds: number;
}

const AgreementContainer: React.FC<AgreementContainerProps> = ({ 
  timerDone, 
  timerStarted,
  timerSeconds 
}) => {
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleAgree = () => {
    if (timerDone && !isAgreed) {
      setIsAgreed(true);
      setShowWarning(false);
      localStorage.setItem('rulesAgreement', 'true');
    } else if (!timerDone) {
      setShowWarning(true);
    }
  };

  return (
    <div className="agree-container">
      <h2>Community Agreement</h2>
      
      {timerStarted && !timerDone && (
        <p className="timer">
          Timer: <span>{formatTime(timerSeconds)}</span> remaining
        </p>
      )}
      
      {!timerStarted && (
        <p className="timer">
          Please scroll through all rules to start the timer
        </p>
      )}

      <div 
        className={`agree-box ${!timerDone ? 'disabled' : ''} ${isAgreed ? 'active' : ''}`}
        onClick={handleAgree}
        role="checkbox"
        aria-checked={isAgreed}
      >
        <span className="checkmark">✓</span>
      </div>

      <p className="status">
        {isAgreed 
          ? "You have agreed to the community rules"
          : timerDone 
            ? "You may now agree to the rules"
            : timerStarted
              ? "Please wait for timer to finish"
              : "Please read all rules first"
        }
      </p>

      <button 
        disabled={!isAgreed}
        className={isAgreed ? 'enabled' : ''}
      >
        <a href="/register">Register</a>
      </button>

      {showWarning && (
        <p className="warning">
          ⏳ कृपया सभी नियमों को ध्यानपूर्वक पढ़ने के बाद ही पंजीकरण करें।
        </p>
      )}
    </div>
  );
};

export default AgreementContainer;