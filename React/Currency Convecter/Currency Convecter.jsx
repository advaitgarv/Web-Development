const { useState, useMemo } = React;

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 156.3,
  };
  const convertedValue = useMemo(() => {
    const usdValue = amount / rates[fromCurrency];
    return usdValue * rates[fromCurrency];
  }, [amount, fromCurrency]);

  const formattedResult = `${convertedValue.toFixed(2)} ${toCurrency}`;

  return (
    <div className="converter">
      <h2>Currency Converter</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <div className="selectors">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
      </div>

      <div className="result">{formattedResult}</div>
    </div>
  );
}
