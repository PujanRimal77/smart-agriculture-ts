import { Farmer } from './entities/Farmer';
import { MobileApp } from './entities/MobileApp';
import { Sensor } from './entities/Sensor';
import { IrrigationSystem } from './entities/IrrigationSystem';
import { EdgeDevice } from './entities/EdgeDevice';

// Creating instances
const farmer = new Farmer(1, "John Doe", "Farm A");
const mobileApp = new MobileApp("v1.0", 1);
const sensor = new Sensor(101, "Soil Moisture");
const irrigationSystem = new IrrigationSystem(202);
const edgeDevice = new EdgeDevice(301, "Field 1");

// Simulating actions
farmer.viewCropData();
sensor.measureEnvironment();
sensor.transmitData();
irrigationSystem.adjustWater(20);
edgeDevice.collectSensorData();
edgeDevice.sendDataToServer();