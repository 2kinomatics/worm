
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// We instruct the model to act as a "Senior Peer Mentor" to keep the tone human
const PEER_MENTOR_INSTRUCTION = "You are a kind, encouraging senior student mentor at EduGap. Use warm language, avoid robotic list formats, and focus on making the student feel smart and capable.";

/**
 * Generates an AI lesson guide for a student.
 * Uses gemini-3-pro-preview for high-quality educational content generation.
 */
export const generateAILesson = async (topic: string, gradeLevel: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Create a warm 'Spark Guide' for a ${gradeLevel} student on: "${topic}". 
      Keep it encouraging. Structure:
      1. 'The Heart of it' (A friendly summary)
      2. 'Key Steps' (3 simple pointers)
      3. 'A Handy Trick' (A mnemonic or shortcut)
      4. 'Try This' (One gentle practice question)
      
      Return JSON:
      {
        "title": "string",
        "summary": "string",
        "steps": ["string"],
        "proTip": "string",
        "practice": "string"
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
            practice: { type: Type.STRING }
          },
          required: ["title", "summary", "steps", "proTip", "practice"]
        }
      }
    });
    // Use .text property to access the generated content as a string
    return JSON.parse(response.text?.trim() || '{}');
  } catch (error) {
    console.error("Spark Guide Error:", error);
    return null;
  }
};

/**
 * Analyzes learning gaps for a student based on a topic.
 * Uses gemini-3-pro-preview for advanced diagnostic reasoning.
 */
export const analyzeLearningGap = async (topic: string, gradeLevel: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Help a friend in ${gradeLevel} who is findind "${topic}" difficult. 
      Spot 3 'Foundations' they might need to revisit. 
      Return JSON: 
      {
        "rootCause": "A kind summary of why this is tricky",
        "gaps": [
          {"concept": "string", "why": "string", "protocol": "A friendly tip"}
        ]
      }`,
      config: {
        systemInstruction: PEER_MENTOR_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            rootCause: { type: Type.STRING },
            gaps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  concept: { type: Type.STRING },
                  why: { type: Type.STRING },
                  protocol: { type: Type.STRING }
                },
                required: ["concept", "why", "protocol"]
              }
            }
          },
          required: ["rootCause", "gaps"]
        }
      }
    });
    
    // Use .text property to access the generated content as a string
    return JSON.parse(response.text?.trim() || '{}');
  } catch (error) {
    console.error("Learning Gap Analysis Error:", error);
    return null;
  }
};

/**
 * Fetches a daily discovery word.
 * Uses gemini-3-flash-preview for simple text lookup and formatting.
 */
export const getWordOfTheDay = async () => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Share a beautiful word in a foreign language for a student. JSON: word, translation, language, pronunciation, sentence.`,
      config: {
        systemInstruction: "You are a language lover sharing a 'discovery' with a friend.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            word: { type: Type.STRING },
            translation: { type: Type.STRING },
            language: { type: Type.STRING },
            pronunciation: { type: Type.STRING },
            sentence: { type: Type.STRING }
          },
          required: ["word", "translation", "language", "pronunciation", "sentence"]
        }
      }
    });
    // Use .text property to access the generated content as a string
    return JSON.parse(response.text?.trim() || '{}');
  } catch (error) {
    return { word: "Aura", translation: "Breath", language: "Latin", pronunciation: "OW-rah", sentence: "Every student has their own unique aura of potential." };
  }
};
