import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateAIResponse = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "I apologize, but I am currently offline due to a missing API key. Please contact support.";
  }

  try {
    // Using gemini-3-flash-preview for quick, efficient responses
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the virtual assistant for Raharjo Capital, a prestigious investment firm based in Indonesia. 
        Your tone should be professional, polite, and knowledgeable.
        You can answer questions about:
        1. Investment strategies (Conservative, Balanced, Aggressive).
        2. Market trends in Southeast Asia (General overview only).
        3. Services offered by Raharjo Capital (Private Equity, Wealth Management, Corporate Advisory, Venture Capital).
        
        If asked about specific financial advice for an individual, standard disclaimer: "I am an AI assistant. Please consult with our certified financial advisors for personalized investment advice."
        Keep answers concise (under 100 words) unless asked for details.`,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};