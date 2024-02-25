import { useState } from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Create() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [worker, setWorker] = useState("Uanela");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price, description, worker };

    setIsLoading(true);
    setTimeout(() => {
      fetch("http://localhost:8000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      }).then(() => setIsLoading(false));
    }, 2000);
  };

  return (
    <div className="create">
      <h2>Adicionar um Novo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do producto:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Descrição:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Preço:</label>
        <input
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Funcionário:</label>
        <select value={worker} onChange={(e) => setWorker(e.target.value)}>
          <option value="Uanela">Uanela</option>
          <option value="Como">Como</option>
          <option value="Parker">Parker</option>
          <option value="ArmisTrong">ArmisTrong</option>
        </select>
        <button disabled={isLoading}>
          {isLoading ? (
            <FontAwesomeIcon icon={faCircleNotch} className="loading-notch" />
          ) : (
            "Adicionar Producto"
          )}
        </button>
      </form>
    </div>
  );
}
