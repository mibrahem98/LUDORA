import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiAdapter {
  private model;
  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    this.model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }
  async translate(text: string, targetLocale: string): Promise<string> {
    const prompt = "Translate this gaming text to " + targetLocale + ": " + text;
    const result = await this.model.generateContent(prompt);
    return result.response.text().trim() || text;
  }
}
