const connectDB = require("./config/db");
const User = require('./models/user');
const Role = require('./models/role');
const ContentCategory = require('./models/content_category');
const bcrypt = require("bcrypt");

const seedDatabase = async () => {
  try {
    await connectDB();
    // Create roles
    const superAdminRole = new Role({ role: 'super_admin' });
    const adminRole = new Role({ role: 'admin' });
    const churchLeaderRole = new Role({ role: 'leader' });
    const churchMemberRole = new Role({ role: 'member' });
    const contentProviderRole = new Role({ role: 'content_provider' });
    await superAdminRole.save();
    await adminRole.save();
    await churchLeaderRole.save();
    await churchMemberRole.save();
    await contentProviderRole.save();
    // Create Content Categories
    const content_cateogries = await ContentCategory.insertMany([
      { name: "Leadership" },
      { name: "Bible" },
      { name: "Kids" },
      { name: "Wealth" },
      { name: "Worship" },
      { name: "Relationships" },
      { name: "Physical Health" },
      { name: "Emotional Health" },
      { name: "Spiritual Health" },
    ]);
    const adminRole = new Role({ role: 'admin' });
    const churchLeaderRole = new Role({ role: 'leader' });
    const churchMemberRole = new Role({ role: 'member' });
    const contentProviderRole = new Role({ role: 'content_provider' });
    await superAdminRole.save();
    await adminRole.save();
    await churchLeaderRole.save();
    await churchMemberRole.save();
    await contentProviderRole.save();

    // Create a user with super admin role
    const sa_password = 'SuperAdmin@1234';
    const hashed_sa_password = await bcrypt.hash(sa_password, 10);
    const saAdminUser = new User({
      first_name: 'super',
      last_name: 'admin',
      email: 'superadmin@hah.com',
      mobile: '999-99-9999',
      password: hashed_sa_password,
      role: [superAdminRole._id]
    });

    await saAdminUser.save();

    // Create a user with admin role
    const admin_password = 'Admin@1234';
    const hashed_admin_password = await bcrypt.hash(admin_password, 10);
    const adminUser = new User({
      first_name: 'admin',
      last_name: 'admin',
      email: 'admin@hah.com',
      mobile: '999-99-9998',
      password: hashed_admin_password,
      role: [adminRole._id]
    });

    await adminUser.save();

    console.log('Initial data seeded');
    process.exit(1);
  } catch (e) {
    console.log(e);
    console.log('Seeding failed');
    process.exit(1);
  }
};

seedDatabase();