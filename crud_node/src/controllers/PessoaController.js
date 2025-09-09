const db = require('../database/db');

module.exports = {
  async create(request, response) {
    const { nome, cpf, telefone, rua, numero, complemento, bairro, cep, cidade, estado } = request.body;

    if (!nome || !cpf) {
      return response.status(400).json({ error: 'Nome e CPF são obrigatórios.' });
    }

    try {
      const result = await db.query(
        'INSERT INTO pessoas (nome, cpf, telefone, rua, numero, complemento, bairro, cep, cidade, estado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [nome, cpf, telefone, rua, numero, complemento, bairro, cep, cidade, estado]
      );
      return response.status(201).json(result.rows[0]);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  async readAll(request, response) {
    try {
      const result = await db.query('SELECT * FROM pessoas ORDER BY nome ASC');
      return response.json(result.rows);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  async readById(request, response) {
    const { id } = request.params;

    try {
      const result = await db.query('SELECT * FROM pessoas WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return response.status(404).json({ error: 'Pessoa não encontrada.' });
      }
      return response.json(result.rows[0]);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const { nome, cpf, telefone, rua, numero, complemento, bairro, cep, cidade, estado } = request.body;

    try {
      const result = await db.query(
        'UPDATE pessoas SET nome = $1, cpf = $2, telefone = $3, rua = $4, numero = $5, complemento = $6, bairro = $7, cep = $8, cidade = $9, estado = $10 WHERE id = $11 RETURNING *',
        [nome, cpf, telefone, rua, numero, complemento, bairro, cep, cidade, estado, id]
      );

      if (result.rows.length === 0) {
        return response.status(404).json({ error: 'Pessoa não encontrada para atualização.' });
      }
      return response.json(result.rows[0]);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    try {
      const result = await db.query('DELETE FROM pessoas WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return response.status(404).json({ error: 'Pessoa não encontrada para deletar.' });
      }
      return response.status(200).json({ message: 'Pessoa deletada com sucesso.' });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};