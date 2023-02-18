export default Shimmer = (props) => {
  return (
    <div className="cardList">
      {Array(10)
        .fill("")
        .map(() => (
          <div className="shimmer-card"></div>
        ))}
    </div>
  );
};
