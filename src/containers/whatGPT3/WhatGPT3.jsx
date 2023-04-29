
import { Feature } from "../../components"
import "./whatgpt3.css"

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin " id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3" text="GPT-3 (Generative Pre-trained Transformer 3) is a language model developed by OpenAI that generates natural language text using deep learning techniques and has 175 billion parameters, making it one of the largest and most powerful language models."  />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text"> The possibilities are beyond your imagination</h1>
        <p> Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="An AI chatbot is a computer program that simulates conversation with humans using natural language processing and machine learning." />
        <Feature title="Knowledgebase" text="A Knowledgebase in AI is a database of information that an AI system can use to make decisions or provide responses." />
        <Feature title="Education" text="Education in AI offers benefits such as preparing individuals for AI-related jobs, promoting innovation, and improving efficiency and productivity in industries."  />
      </div>
    </div>
  )
}

export default WhatGPT3
