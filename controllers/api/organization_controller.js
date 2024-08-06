const Organization = require('../../models/organization');


// Create a new organization
const createOrganization = async (req, res) => {
  try {
    const organization = new Organization(req.body);
    await organization.save();
    res.status(200).json(organization);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create organization', error: error.message });
  }
};


// Get an organization by ID
const getOrganization = async (req, res) => {
  try {
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.status(200).json(organization);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch organization', error: error.message });
  }
};

// Get all organizations
const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch organizations', error: error.message });
  }
};

// Update an organization by ID
const updateOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.status(200).json(organization);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update organization', error: error.message });
  }
};

// Delete an organization by ID
const deleteOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByIdAndDelete(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.status(200).json({ message: 'Organization deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete organization', error: error.message });
  }
};


module.exports = {
  getOrganization,  
  createOrganization,
  getOrganizations,
  updateOrganization,
  deleteOrganization,

};
