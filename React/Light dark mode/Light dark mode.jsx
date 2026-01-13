export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>My name is Advait Garv</p>
        <button onClick={handleToggleTheme}>Change Theme </button>
      </div>
    </div>
  );
}
