const Church = require("../../models/church");
const Organization = require("../../models/organization");


// Create a new church
const createChurch = async (req, res) => {
  try {
    const { Organization } = req.body;

    // Validate if the parent_organization exists
    if (Organization) {
      const parentOrgExists = await Organization.findById(Organization);
      if (!parentOrgExists) {
        return res.status(400).json({ error: 'Parent organization not found' });
      }
    }

    const church = new Church(req.body);
    await church.save(); // Save church first

    // Populate parent_organization field after saving
    const populatedChurch = await Church.findById(church._id)
      .populate('parent_organization')
      .exec();

    res.status(201).json(populatedChurch);
  } catch (error) {
    res.status(400).json({ error: `Failed to create church: ${error.message}` });
  }
};

// Get all churches
const getAllChurches = async (req, res) => {
  try {
    const churches = await Church.find().populate('parent_organization');
    res.status(200).json(churches);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a church by ID
const getChurchById = async (req, res) => {
  try {
    const church = await Church.findById(req.params.id).populate('parent_organization');
    if (!church) {
      return res.status(404).json({ error: 'Church not found' });
    }
    res.status(200).json(church);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a church by ID
const updateChurch = async (req, res) => {
  try {
    const church = await Church.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('parent_organization');
    if (!church) {
      return res.status(404).json({ error: 'Church not found' });
    }
    res.status(200).json(church);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a church by ID
const deleteChurch = async (req, res) => {
  try {
    const church = await Church.findByIdAndDelete(req.params.id);
    if (!church) {
      return res.status(404).json({ error: 'Church not found' });
    }
    res.status(200).json({ message: 'Church deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports = {
  createChurch,
  getAllChurches,
  getChurchById,
  updateChurch,
  deleteChurch
};