import { useState } from 'react';
export default function Create() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [worker, setWorker] = useState('Uanela');

  const handleSubmit = (e) => {
    e.preventDefaut();
    const product = {name, description, price, worker};
    console.log(product);
  };

  return (
    <div className="create">
      <h2>Adicionar um Novo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label > Nome do Produto: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label > Descrição: </label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required 
          ></textarea>

        <label > Preço: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required />

        <label > Nome do Funcionario; </label>
        <select
          value={worker}
          onChange={(e) => setWorker(e.target.value)}
        >
          <option value="Uanela">Uanela</option>
          <option value="Como">Como</option>
          <option value="Parker">Parker</option>
        </select>
        <button>Adicionar</button>

      </form>
    </div>
  );
}