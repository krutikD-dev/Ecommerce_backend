
import dotenv from 'dotenv' 
dotenv.config()
import {Sequelize} from 'sequelize';


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host:process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect:'mysql' 
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};
export default sequelize;
