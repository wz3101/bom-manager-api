const pool = require('../db');

// GET all parts
const getAllParts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM parts');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET part by ID
const getPartById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM parts WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Part not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new part
const createPart = async (req, res) => {
  const { name, category, unit_cost, quantity } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO parts (name, category, unit_cost, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, category, unit_cost, quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update part
const updatePart = async (req, res) => {
  const { id } = req.params;
  const { name, category, unit_cost, quantity } = req.body;
  try {
    const result = await pool.query(
      'UPDATE parts SET name = $1, category = $2, unit_cost = $3, quantity = $4 WHERE id = $5 RETURNING *',
      [name, category, unit_cost, quantity, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Part not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE part
const deletePart = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM parts WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Part not found' });
    res.json({ message: 'Part deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllParts,
  getPartById,
  createPart,
  updatePart,
  deletePart,
};
