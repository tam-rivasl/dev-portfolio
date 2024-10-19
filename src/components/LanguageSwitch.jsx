import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LanguageSwitch = ({ onLanguageChange }) => {
  const [selectedLang, setSelectedLang] = useState('en');
  console.log("Componente montado, idioma inicial:", selectedLang);

  // Al montar el componente, obtener el idioma guardado en localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'en';
    console.log("Idioma almacenado en localStorage:", storedLang);
    setSelectedLang(storedLang);
  }, []);

  const handleChange = (event) => {
    const newLang = event.target.value;
    console.log("Nuevo idioma seleccionado:", newLang);
    setSelectedLang(newLang);
    localStorage.setItem('language', newLang);

    // Informar al componente padre sobre el cambio de idioma
    if (onLanguageChange) {
        console.log("onLanguageChange llamado con:", newLang);

      onLanguageChange(newLang);
    }
  };

  return (
    <div className="group/language flex items-center gap-2">
      <label htmlFor="languageSwitch" className="flex items-center gap-1 text-sm font-medium leading-6 text-skin-base transition-transform ease-in-out group-hover/language:rotate-45">
        🌍 Language
      </label>
      <select
        id="languageSwitch"
        value={selectedLang}
        onChange={handleChange}
        className="focus:ring-skin-hue ring-skin-muted block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-skin-base ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

// Validación de props usando PropTypes
LanguageSwitch.propTypes = {
  onLanguageChange: PropTypes.func.isRequired, // Marcamos onLanguageChange como requerido y de tipo función
};

export default LanguageSwitch;
