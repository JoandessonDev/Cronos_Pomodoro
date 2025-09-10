import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = 'dark' | 'light';
export function Menu() {

  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storageTheme;
  });

  function handleThemeChange(e?: React.MouseEvent){
    setTheme(prev => prev == 'dark' ? 'light' : 'dark');
    e?.preventDefault();
  }

  useEffect(() =>{
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  const nextThemeIcon = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
  }

  return (
    <>
      <nav>
        <a href="#" className={styles.menu} aria-label="Ir para a Home" title="Ir para a Home">
          <HouseIcon/>
        </a>
         <a href="#" className={styles.menu} aria-label="Ver Historico" title="Ver Historico">
          <HistoryIcon/>
        </a>
         <a href="#" className={styles.menu} aria-label="Configurações" title="Configurações">
          <SettingsIcon/>
        </a>
         <a href="#" onClick={handleThemeChange} className={styles.menu} aria-label="Mudar Tema" title="Mudar Tema">
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
