export default Shimmer = () => {
  return (
    <div className="cardList">
      {Array(10)
        .fill("")
        .map((index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};
