import { Request, Response, NextFunction } from 'express';
import qrcode from 'qrcode';
import path from 'path';
import fs from 'fs/promises'

//Code for Generating QR codes on the fly.
const GenerateQRCode = async (req: Request, res:Response, next: NextFunction) => {

    try {
        const YoutubeLink:string = "https://www.youtube.com/playlist?list=PLpfRwCj2zlKWoq0UrbVYVhXLHshYR5gsu";
        const qrCodePath = path.join(__dirname, 'qrcodes');
        await fs.mkdir(qrCodePath, { recursive: true });
    
        const qrCodeFilePath = path.join(qrCodePath, 'qrcode.png');
        await qrcode.toFile(qrCodeFilePath, YoutubeLink);
    
        return res.json({ qrCodeImageUrl: `/qrcodes/qrcode.png` });
      } catch (error) {
        return res.status(500).json({ error: 'An error occurred while generating the QR code.' });
      }
}
export default { GenerateQRCode};