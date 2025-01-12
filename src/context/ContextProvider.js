function MyProvider({ children }) {
    const [value, setValue] = useState('initial value');
  
    return (
      <MyContext.Provider value={{ value, setValue }}>
        {children}
      </MyContext.Provider>
    );
  }
  