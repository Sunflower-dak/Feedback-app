export default function ErrorMessage({ message }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        fontSize: "18px",
        color: "red",
        padding: "20px",
        border: "1px solid red",
        borderRadius: "5px",
        backgroundColor: "#ffe6e6",
      }}
    >
      {message}
    </div>
  );
}
