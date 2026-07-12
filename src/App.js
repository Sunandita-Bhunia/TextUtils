import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { THEMES } from './themes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleTheme = (themeName) => {
    const nextTheme = theme === themeName ? 'light' : themeName;
    setTheme(nextTheme);
    document.body.style.backgroundColor = THEMES[nextTheme].bg;
    const alertMessage =
      nextTheme === 'light'
        ? 'Light mode has been enabled'
        : `${THEMES[nextTheme].name} has been enabled`;
    showAlert(alertMessage, 'success');
  };

  const currentTheme = THEMES[theme];

  return (
    <>
      <Router>
        <Navbar
        title="TextUtils"
        theme={theme}
        navbarMode={currentTheme.navbarMode}
        toggleTheme={toggleTheme}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Convert to UpperCase, Convert to Lower Case, Remove Extra Spaces, Alternate Case, Clear Text, Copy Text"
                  theme={currentTheme}
                />
              }
            />
            <Route path="/about" element={<About theme={currentTheme} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
