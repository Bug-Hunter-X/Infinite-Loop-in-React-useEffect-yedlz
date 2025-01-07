```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run after every render
    console.log('Count:', count);
    // This will cause an infinite loop because it modifies the state in the effect
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```