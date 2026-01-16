const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};

export default function App() {
  return (
    <>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>

      <div className="content">
        {/* lots of content */}
      </div>
    </>
  );
}
