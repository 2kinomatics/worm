
import { GoogleGenAI, Type } from "@google/genai";

// Initialize AI inside the function to ensure the latest API Key is always used
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const PEER_MENTOR_INSTRUCTION = "You are a kind, encouraging senior student mentor at Anir. Use warm language, avoid robotic list formats, and focus on making the student feel smart and capable. You specialize in Mongolian students' academic needs. ALL RESPONSES MUST BE IN MONGOLIAN.";

export const generateAILesson = async (topic: string, gradeLevel: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Create a warm 'Spark Guide' in Mongolian for a ${gradeLevel} student on: "${topic}". 
      Also analyze learning gaps by identifying 2 foundational concepts they might be missing.
      Keep it encouraging.
      
      Return JSON in Mongolian:
      {
        "title": "string",
        "summary": "string",
        "steps": ["string"],
        "proTip": "string",
        "practice": "string",
        "gaps": [{"concept": "string", "why": "string"}]
      }`,
      config: {
        systemInstruction: PEER_MENTOR_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            summary: { type: Type.STRING },
            steps: { type: Type.ARRAY, items: { type: Type.STRING } },
            proTip: { type: Type.STRING },
            practice: { type: Type.STRING },
            gaps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  concept: { type: Type.STRING },
                  why: { type: Type.STRING }
                }
              }
            }
          },
          required: ["title", "summary", "steps", "proTip", "practice", "gaps"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
