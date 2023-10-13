import "./Select.scss";
import Gen from "../../public/generation.jpeg";

function Select({ setSelectValue }) {
  const options = [
    { label: "Génération 1", value: 1 },
    { label: "Génération 2", value: 2 },
    { label: "Génération 3", value: 3 },
    { label: "Génération 4", value: 4 },
    { label: "Génération 5", value: 5 },
    { label: "Génération 6", value: 6 },
    { label: "Génération 7", value: 7 },
    { label: "Génération 8", value: 8 },
  ];

  function handleSelect(event) {
    setSelectValue(event.target.value);
  }
  return (
    <div className="select-dropdown">
      <div className="Gen">
        <img src={Gen} alt="" />
      </div>
      <select onChange={handleSelect}>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
