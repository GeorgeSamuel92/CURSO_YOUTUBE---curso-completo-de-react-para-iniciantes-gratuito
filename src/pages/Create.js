import { useState } from 'react';
export default function Create() {
  const [name, setName] = useState('teste');
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [worker, setWorker] = useState('Uanela');

  return (
    <div className="create">
      <h2>Adicionar um Novo Producto</h2>
      <form >
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

          required > </textarea>

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
        <button type="submit">Adicionar</button>

      </form>
    </div>
  );
}