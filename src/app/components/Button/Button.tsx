interface ButtonType {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ name, onClick }: ButtonType) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
