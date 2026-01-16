import { useRef } from "react";

export default function App() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <button onClick={scrollToSection}>
        Go to Section
      </button>

      <div className="spacer">Top Content</div>

      <section ref={sectionRef} className="target-section">
        Target Section
      </section>
    </>
  );
}
