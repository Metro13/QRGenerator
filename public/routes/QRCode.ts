import express from 'express';
import controller from '../controller/QRCodeController';
const router = express.Router();

router.get('/', controller.GenerateQRCode);

export default router;