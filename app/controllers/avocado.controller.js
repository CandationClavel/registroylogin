import Avocado from '../models/avocado.model.js';

export const getAllAvocadoPrices = async (req, res) => {
  try {
    const avocadoPrices = await Avocado.findAll();
    res.status(200).json(avocadoPrices);
  } catch (error) {
    console.error('Error fetching avocado prices:', error);
    res.status(500).json({ message: 'Error fetching avocado prices' });
  }
};

export const getAvocadoPricesByRegion = async (req, res) => {
  const { region } = req.params;
  try {
    const avocadoPrices = await Avocado.findAll({
      where: { region }
    });
    res.status(200).json(avocadoPrices);
  } catch (error) {
    console.error(`Error fetching avocado prices for region ${region}:`, error);
    res.status(500).json({ message: `Error fetching avocado prices for region ${region}` });
  }
};

export const getSpecificAvocadoPrices = async (req, res) => {
  try {
    const avocadoPrices = await Avocado.findAll({
      attributes: ['AveragePrice', 'Region']
    });
    res.status(200).json(avocadoPrices);
  } catch (error) {
    console.error('Error fetching specific avocado prices:', error);
    res.status(500).json({ message: 'Error fetching specific avocado prices' });
  }
};