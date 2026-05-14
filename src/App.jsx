import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Mathematics Foundation",
    emoji: "∑",
    color: "#FF6B35",
    desc: "The bedrock of all AI. Skip this and you'll hit walls later.",
    topics: [
      {
        name: "Statistics & Probability",
        resources: [
          { type: "video", label: "Complete Statistics for ML – Sheryians", url: "https://youtu.be/eF7HoC-cLRM?si=I7ff3rqqNUSGdIje" },
          { type: "doc", label: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability" },
        ]
      },
      {
        name: "Linear Algebra",
        resources: [
          { type: "video", label: "Essence of Linear Algebra – 3Blue1Brown", url: "https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
          { type: "doc", label: "MIT OCW Linear Algebra", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" },
        ]
      },
      {
        name: "Calculus for ML",
        resources: [
          { type: "video", label: "Essence of Calculus – 3Blue1Brown", url: "https://youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
          { type: "doc", label: "Khan Academy Calculus", url: "https://www.khanacademy.org/math/calculus-1" },
        ]
      },
    ]
  },
  {
    id: 2,
    title: "Python & Libraries",
    emoji: "🐍",
    color: "#4ECDC4",
    desc: "Your primary weapon. NumPy, Pandas, Matplotlib — the data trinity.",
    topics: [
      {
        name: "Python Programming",
        resources: [
          { type: "video", label: "Python Full Course – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9qT0KsKJ7yCq70iFFP3MFJ5" },
          { type: "doc", label: "Python Official Docs", url: "https://docs.python.org/3/" },
          { type: "doc", label: "Real Python Tutorials", url: "https://realpython.com/" },
        ]
      },
      {
        name: "NumPy",
        resources: [
          { type: "video", label: "NumPy Full Course – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9qT0KsKJ7yCq70iFFP3MFJ5" },
          { type: "doc", label: "NumPy Official Docs", url: "https://numpy.org/doc/stable/" },
        ]
      },
      {
        name: "Pandas",
        resources: [
          { type: "video", label: "Pandas – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9qT0KsKJ7yCq70iFFP3MFJ5" },
          { type: "doc", label: "Pandas Official Docs", url: "https://pandas.pydata.org/docs/" },
        ]
      },
      {
        name: "Matplotlib & Seaborn",
        resources: [
          { type: "video", label: "Data Visualization – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9qT0KsKJ7yCq70iFFP3MFJ5" },
          { type: "doc", label: "Matplotlib Docs", url: "https://matplotlib.org/stable/" },
          { type: "doc", label: "Seaborn Docs", url: "https://seaborn.pydata.org/" },
        ]
      },
    ]
  },
  {
    id: 3,
    title: "SQL & Data",
    emoji: "🗄",
    color: "#A8DADC",
    desc: "Data lives in databases. You must speak SQL.",
    topics: [
      {
        name: "SQL for Data Science",
        resources: [
          { type: "video", label: "Complete SQL in 1 Shot – Sheryians", url: "https://youtu.be/p1epCuYb5OQ?si=5rI6wAD6aXI3zm-A" },
          { type: "doc", label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
          { type: "doc", label: "W3Schools SQL", url: "https://www.w3schools.com/sql/" },
          { type: "doc", label: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
        ]
      },
    ]
  },
  {
    id: 4,
    title: "Machine Learning",
    emoji: "🤖",
    color: "#FFE66D",
    desc: "Theory + implementation with Scikit-learn. Then go to Kaggle for 1–2 months.",
    topics: [
      {
        name: "ML Theory (All Algorithms)",
        resources: [
          { type: "video", label: "ML Complete Course Parts 1–4 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9qRfmaHF1SB7E_vDHuYs--f" },
          { type: "doc", label: "Scikit-learn Docs", url: "https://scikit-learn.org/stable/" },
          { type: "doc", label: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
        ]
      },
      {
        name: "Kaggle Practice (1–2 months)",
        resources: [
          { type: "video", label: "Kaggle for Beginners – Abhishek Thakur", url: "https://youtube.com/c/AbhishekThakurAbhi" },
          { type: "doc", label: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
          { type: "doc", label: "Kaggle Competitions", url: "https://www.kaggle.com/competitions" },
        ]
      },
    ]
  },
  {
    id: 5,
    title: "Deep Learning",
    emoji: "🧠",
    color: "#C77DFF",
    desc: "Neural networks, CNN, RNN, Transformers. Pick PyTorch — it's the industry standard.",
    topics: [
      {
        name: "Deep Learning Math (Backprop, Gradients)",
        resources: [
          { type: "video", label: "Neural Networks – 3Blue1Brown", url: "https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
          { type: "video", label: "micrograd – Andrej Karpathy", url: "https://youtu.be/VMj-3S1tku0" },
          { type: "doc", label: "Deep Learning Book", url: "https://www.deeplearningbook.org/" },
        ]
      },
      {
        name: "Neural Networks & Deep Learning Theory",
        resources: [
          { type: "video", label: "DL Part 1 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR" },
          { type: "doc", label: "fast.ai Practical DL", url: "https://course.fast.ai/" },
        ]
      },
      {
        name: "CNN (Convolutional Neural Networks)",
        resources: [
          { type: "video", label: "DL Part 2 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR" },
          { type: "doc", label: "Stanford CS231n Notes", url: "https://cs231n.github.io/" },
        ]
      },
      {
        name: "RNN, LSTM, GRU",
        resources: [
          { type: "video", label: "DL Part 3 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR" },
          { type: "doc", label: "Understanding LSTM – Colah's Blog", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
        ]
      },
      {
        name: "Transformers & Attention Mechanism",
        resources: [
          { type: "video", label: "DL Part 4 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR" },
          { type: "video", label: "Attention is All You Need Explained – Yannic Kilcher", url: "https://youtu.be/iDulhoQ2pro" },
          { type: "doc", label: "The Annotated Transformer", url: "https://nlp.seas.harvard.edu/annotated-transformer/" },
        ]
      },
      {
        name: "PyTorch (Framework)",
        resources: [
          { type: "video", label: "PyTorch Full Course – freeCodeCamp", url: "https://youtu.be/V_xro1bcAuA" },
          { type: "video", label: "Let's build GPT – Andrej Karpathy", url: "https://youtu.be/kCc8FmEb1nY" },
          { type: "doc", label: "PyTorch Official Docs", url: "https://pytorch.org/docs/stable/" },
          { type: "doc", label: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" },
        ]
      },
    ]
  },
  {
    id: 6,
    title: "Large Language Models",
    emoji: "💬",
    color: "#F72585",
    desc: "How LLMs work under the hood. Attention architecture, tokenization, pretraining.",
    topics: [
      {
        name: "LLM Architecture & How They Work",
        resources: [
          { type: "video", label: "GenAI Part 1 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR" },
          { type: "video", label: "Intro to LLMs – Andrej Karpathy", url: "https://youtu.be/zjkBMFhNj_g" },
          { type: "doc", label: "HuggingFace NLP Course", url: "https://huggingface.co/learn/nlp-course" },
        ]
      },
      {
        name: "Fine-tuning LLMs (LoRA, QLoRA)",
        resources: [
          { type: "video", label: "LLM Fine-Tuning Playlist – Krish Naik", url: "https://youtube.com/@krishnaik06" },
          { type: "video", label: "Fine-tuning with Unsloth – 1littlecoder", url: "https://youtube.com/@1littlecoder" },
          { type: "doc", label: "HuggingFace PEFT Docs", url: "https://huggingface.co/docs/peft" },
          { type: "doc", label: "Unsloth GitHub", url: "https://github.com/unslothai/unsloth" },
        ]
      },
    ]
  },
  {
    id: 7,
    title: "Computer Vision",
    emoji: "👁",
    color: "#06D6A0",
    desc: "Object detection, segmentation, and OpenCV. Takes about 2 months.",
    topics: [
      {
        name: "OpenCV Basics",
        resources: [
          { type: "video", label: "OpenCV Python – freeCodeCamp", url: "https://youtu.be/oXlwWbU8l2o" },
          { type: "doc", label: "OpenCV Docs", url: "https://docs.opencv.org/4.x/" },
        ]
      },
      {
        name: "Object Detection (YOLO, R-CNN)",
        resources: [
          { type: "video", label: "Computer Vision Playlist – Krish Naik", url: "https://youtube.com/@krishnaik06" },
          { type: "video", label: "PyTorch for DL + CV – Daniel Bourke", url: "https://youtu.be/Z_ikDlimN6A" },
          { type: "doc", label: "Ultralytics YOLO Docs", url: "https://docs.ultralytics.com/" },
          { type: "doc", label: "Detectron2 Docs", url: "https://detectron2.readthedocs.io/" },
        ]
      },
      {
        name: "Image Segmentation (U-Net, SAM)",
        resources: [
          { type: "video", label: "Segment Anything – Meta AI", url: "https://youtu.be/GdvzBzx1iZo" },
          { type: "doc", label: "SAM2 Docs – Meta", url: "https://github.com/facebookresearch/segment-anything-2" },
          { type: "doc", label: "U-Net Paper", url: "https://arxiv.org/abs/1505.04597" },
        ]
      },
    ]
  },
  {
    id: 8,
    title: "NLP",
    emoji: "📝",
    color: "#FF9F1C",
    desc: "Text processing, embeddings, and language understanding with ML models.",
    topics: [
      {
        name: "NLP with ML Models",
        resources: [
          { type: "video", label: "NLP – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9qRfmaHF1SB7E_vDHuYs--f" },
          { type: "video", label: "Stanford CS224N – NLP with DL", url: "https://youtube.com/playlist?list=PLoROMvodv4rMFqRtEuo6zgCd5kd7JsZwm" },
          { type: "doc", label: "HuggingFace Transformers Docs", url: "https://huggingface.co/docs/transformers" },
          { type: "doc", label: "NLTK Docs", url: "https://www.nltk.org/" },
          { type: "doc", label: "spaCy Docs", url: "https://spacy.io/api/doc" },
        ]
      },
    ]
  },
  {
    id: 9,
    title: "MLOps & Deployment",
    emoji: "⚙",
    color: "#3A86FF",
    desc: "Docker, FastAPI, CI/CD, DVC, cloud. This is what gets models into production.",
    topics: [
      {
        name: "FastAPI",
        resources: [
          { type: "video", label: "FastAPI Full Course – Krish Naik", url: "https://youtube.com/@krishnaik06" },
          { type: "doc", label: "FastAPI Official Docs", url: "https://fastapi.tiangolo.com/" },
        ]
      },
      {
        name: "Docker",
        resources: [
          { type: "video", label: "Docker for Beginners – TechWorld with Nana", url: "https://youtu.be/3c-iBn73dDE" },
          { type: "doc", label: "Docker Official Docs", url: "https://docs.docker.com/" },
        ]
      },
      {
        name: "GitHub CI/CD",
        resources: [
          { type: "video", label: "GitHub Actions – TechWorld with Nana", url: "https://youtube.com/@TechWorldwithNana" },
          { type: "doc", label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
        ]
      },
      {
        name: "DVC (Data Version Control)",
        resources: [
          { type: "video", label: "DVC Tutorial – Krish Naik", url: "https://youtube.com/@krishnaik06" },
          { type: "doc", label: "DVC Official Docs", url: "https://dvc.org/doc" },
        ]
      },
      {
        name: "MLflow (Experiment Tracking)",
        resources: [
          { type: "video", label: "MLflow – Krish Naik", url: "https://youtube.com/@krishnaik06" },
          { type: "doc", label: "MLflow Docs", url: "https://mlflow.org/docs/latest/index.html" },
        ]
      },
      {
        name: "AWS or GCP (Pick One)",
        resources: [
          { type: "video", label: "AWS for ML – freeCodeCamp", url: "https://youtu.be/uj7Jd1Jj5C0" },
          { type: "video", label: "MLOps Zoomcamp – DataTalks.Club", url: "https://github.com/DataTalksClub/mlops-zoomcamp" },
          { type: "doc", label: "AWS SageMaker Docs", url: "https://docs.aws.amazon.com/sagemaker/" },
          { type: "doc", label: "GCP Vertex AI Docs", url: "https://cloud.google.com/vertex-ai/docs" },
        ]
      },
    ]
  },
  {
    id: 10,
    title: "GenAI Applications",
    emoji: "🚀",
    color: "#FF6B6B",
    desc: "RAG, agents, LangChain, and building real GenAI products.",
    topics: [
      {
        name: "RAG Basics & LangChain",
        resources: [
          { type: "video", label: "GenAI Part 2 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR" },
          { type: "video", label: "LangChain Full Course – CampusX", url: "https://youtube.com/@campusx-official" },
          { type: "doc", label: "LangChain Docs", url: "https://python.langchain.com/docs/introduction/" },
          { type: "doc", label: "LlamaIndex Docs", url: "https://docs.llamaindex.ai/" },
        ]
      },
      {
        name: "Agents & Tool Calling",
        resources: [
          { type: "video", label: "GenAI Part 3 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR" },
          { type: "doc", label: "LangChain Agents Docs", url: "https://python.langchain.com/docs/concepts/agents/" },
          { type: "doc", label: "OpenAI Function Calling", url: "https://platform.openai.com/docs/guides/function-calling" },
        ]
      },
      {
        name: "Graph RAG",
        resources: [
          { type: "video", label: "Graph RAG – Microsoft Research", url: "https://youtube.com/@MicrosoftResearch" },
          { type: "doc", label: "GraphRAG Docs – Microsoft", url: "https://microsoft.github.io/graphrag/" },
          { type: "doc", label: "Neo4j Graph RAG Guide", url: "https://neo4j.com/developer-blog/graph-rag/" },
        ]
      },
      {
        name: "Multi-hop RAG",
        resources: [
          { type: "video", label: "Advanced RAG – CampusX", url: "https://youtube.com/@campusx-official" },
          { type: "doc", label: "Advanced RAG Techniques", url: "https://towardsdatascience.com/advanced-rag-techniques-an-illustrated-overview-04d193d8fec6" },
        ]
      },
      {
        name: "Vector Databases",
        resources: [
          { type: "video", label: "Pinecone + LangChain – Krish Naik", url: "https://youtube.com/@krishnaik06" },
          { type: "doc", label: "Pinecone Docs", url: "https://docs.pinecone.io/" },
          { type: "doc", label: "ChromaDB Docs", url: "https://docs.trychroma.com/" },
          { type: "doc", label: "Weaviate Docs", url: "https://weaviate.io/developers/weaviate" },
        ]
      },
    ]
  },
  {
    id: 11,
    title: "Multimodal AI",
    emoji: "🌐",
    color: "#7B2FBE",
    desc: "Where vision meets language. The frontier of AI engineering.",
    topics: [
      {
        name: "Multimodal Models",
        resources: [
          { type: "video", label: "Multimodal AI – Andrej Karpathy", url: "https://youtube.com/@AndrejKarpathy" },
          { type: "doc", label: "HuggingFace Multimodal Guide", url: "https://huggingface.co/docs/transformers/en/model_doc/llava" },
          { type: "doc", label: "OpenAI Vision API", url: "https://platform.openai.com/docs/guides/vision" },
          { type: "doc", label: "Google Gemini Multimodal", url: "https://ai.google.dev/gemini-api/docs/vision" },
        ]
      },
    ]
  },
  {
    id: 12,
    title: "Async Python",
    emoji: "⚡",
    color: "#F4A261",
    desc: "Required for production tool-calling systems and high-performance AI apps.",
    topics: [
      {
        name: "Async / Await in Python",
        resources: [
          { type: "video", label: "Async Python – Tech With Tim", url: "https://youtu.be/t5Bo1Je9EmE" },
          { type: "doc", label: "Python asyncio Docs", url: "https://docs.python.org/3/library/asyncio.html" },
          { type: "doc", label: "Real Python – Async IO", url: "https://realpython.com/async-io-python/" },
        ]
      },
    ]
  },
  {
    id: 13,
    title: "MCP & A2A Protocols",
    emoji: "🔮",
    color: "#2EC4B6",
    desc: "The cutting edge. Model Context Protocol and Agent-to-Agent communication.",
    topics: [
      {
        name: "MCP (Model Context Protocol)",
        resources: [
          { type: "video", label: "MCP Tutorial – Krish Naik", url: "https://youtube.com/@krishnaik06" },
          { type: "doc", label: "MCP Official Docs", url: "https://modelcontextprotocol.io/introduction" },
          { type: "doc", label: "Anthropic MCP Guide", url: "https://docs.anthropic.com/en/docs/agents-and-tools/mcp" },
        ]
      },
      {
        name: "A2A (Agent-to-Agent Protocol)",
        resources: [
          { type: "video", label: "Google ADK & A2A – Google AI", url: "https://youtube.com/@GoogleDevelopers" },
          { type: "doc", label: "A2A Protocol Spec", url: "https://google.github.io/A2A/" },
          { type: "doc", label: "Google ADK Docs", url: "https://google.github.io/adk-docs/" },
        ]
      },
    ]
  },
];

const allVideos = [
  { step: 1, phase: "Phase 1", topic: "Statistics & Probability", label: "Complete Statistics for ML – Sheryians", url: "https://youtu.be/eF7HoC-cLRM?si=I7ff3rqqNUSGdIje", color: "#FF6B35" },
  { step: 2, phase: "Phase 1", topic: "Linear Algebra", label: "Essence of Linear Algebra – 3Blue1Brown", url: "https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", color: "#FF6B35" },
  { step: 3, phase: "Phase 1", topic: "Calculus", label: "Essence of Calculus – 3Blue1Brown", url: "https://youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", color: "#FF6B35" },
  { step: 4, phase: "Phase 2", topic: "Python + Libraries", label: "Python + NumPy + Pandas + Viz – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9qT0KsKJ7yCq70iFFP3MFJ5", color: "#4ECDC4" },
  { step: 5, phase: "Phase 3", topic: "SQL", label: "Complete SQL in 1 Shot – Sheryians", url: "https://youtu.be/p1epCuYb5OQ?si=5rI6wAD6aXI3zm-A", color: "#A8DADC" },
  { step: 6, phase: "Phase 4", topic: "Machine Learning", label: "ML Complete Course Parts 1–4 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9qRfmaHF1SB7E_vDHuYs--f", color: "#FFE66D" },
  { step: 7, phase: "Phase 4", topic: "Kaggle Practice", label: "Kaggle for Beginners – Abhishek Thakur", url: "https://youtube.com/@AbhishekThakurAbhi", color: "#FFE66D" },
  { step: 8, phase: "Phase 5", topic: "DL Math (Backprop)", label: "Neural Networks – 3Blue1Brown", url: "https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", color: "#C77DFF" },
  { step: 9, phase: "Phase 5", topic: "DL Theory (backprop intuition)", label: "micrograd – Andrej Karpathy", url: "https://youtu.be/VMj-3S1tku0", color: "#C77DFF" },
  { step: 10, phase: "Phase 5", topic: "Deep Learning Parts 1–4", label: "DL Complete – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR", color: "#C77DFF" },
  { step: 11, phase: "Phase 5", topic: "PyTorch Framework", label: "PyTorch Full Course – freeCodeCamp", url: "https://youtu.be/V_xro1bcAuA", color: "#C77DFF" },
  { step: 12, phase: "Phase 5", topic: "Build GPT from Scratch", label: "Let's build GPT – Andrej Karpathy", url: "https://youtu.be/kCc8FmEb1nY", color: "#C77DFF" },
  { step: 13, phase: "Phase 6", topic: "LLM Architecture", label: "Intro to LLMs – Andrej Karpathy", url: "https://youtu.be/zjkBMFhNj_g", color: "#F72585" },
  { step: 14, phase: "Phase 6", topic: "GenAI Part 1 – LLM Fundamentals", label: "GenAI Part 1 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR", color: "#F72585" },
  { step: 15, phase: "Phase 6", topic: "Fine-Tuning LLMs", label: "LLM Fine-Tuning Playlist – Krish Naik", url: "https://youtube.com/@krishnaik06", color: "#F72585" },
  { step: 16, phase: "Phase 7", topic: "OpenCV Basics", label: "OpenCV Python – freeCodeCamp", url: "https://youtu.be/oXlwWbU8l2o", color: "#06D6A0" },
  { step: 17, phase: "Phase 7", topic: "Object Detection + Segmentation", label: "Computer Vision – Krish Naik", url: "https://youtube.com/@krishnaik06", color: "#06D6A0" },
  { step: 18, phase: "Phase 7", topic: "CV with PyTorch", label: "PyTorch for DL + CV – Daniel Bourke", url: "https://youtu.be/Z_ikDlimN6A", color: "#06D6A0" },
  { step: 19, phase: "Phase 8", topic: "NLP Full Course", label: "NLP – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9qRfmaHF1SB7E_vDHuYs--f", color: "#FF9F1C" },
  { step: 20, phase: "Phase 8", topic: "NLP with Deep Learning", label: "Stanford CS224N", url: "https://youtube.com/playlist?list=PLoROMvodv4rMFqRtEuo6zgCd5kd7JsZwm", color: "#FF9F1C" },
  { step: 21, phase: "Phase 9", topic: "FastAPI", label: "FastAPI Full Course – Krish Naik", url: "https://youtube.com/@krishnaik06", color: "#3A86FF" },
  { step: 22, phase: "Phase 9", topic: "Docker", label: "Docker for Beginners – TechWorld with Nana", url: "https://youtu.be/3c-iBn73dDE", color: "#3A86FF" },
  { step: 23, phase: "Phase 9", topic: "GitHub CI/CD", label: "GitHub Actions – TechWorld with Nana", url: "https://youtube.com/@TechWorldwithNana", color: "#3A86FF" },
  { step: 24, phase: "Phase 9", topic: "DVC + MLflow", label: "DVC Tutorial – Krish Naik", url: "https://youtube.com/@krishnaik06", color: "#3A86FF" },
  { step: 25, phase: "Phase 9", topic: "Cloud + Full MLOps", label: "MLOps Zoomcamp – DataTalks.Club", url: "https://github.com/DataTalksClub/mlops-zoomcamp", color: "#3A86FF" },
  { step: 26, phase: "Phase 10", topic: "RAG + LangChain", label: "GenAI Part 2 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR", color: "#FF6B6B" },
  { step: 27, phase: "Phase 10", topic: "Agents & Tool Calling", label: "GenAI Part 3 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9oXR4PMGR4pr_DX4wFHkFwR", color: "#FF6B6B" },
  { step: 28, phase: "Phase 10", topic: "LangChain Deep Dive", label: "LangChain Full Course – CampusX", url: "https://youtube.com/@campusx-official", color: "#FF6B6B" },
  { step: 29, phase: "Phase 10", topic: "Graph RAG", label: "Graph RAG – Microsoft Research", url: "https://youtube.com/@MicrosoftResearch", color: "#FF6B6B" },
  { step: 30, phase: "Phase 11", topic: "Multimodal AI", label: "Multimodal AI – Andrej Karpathy", url: "https://youtube.com/@AndrejKarpathy", color: "#7B2FBE" },
  { step: 31, phase: "Phase 12", topic: "Async Python", label: "Async Python – Tech With Tim", url: "https://youtu.be/t5Bo1Je9EmE", color: "#F4A261" },
  { step: 32, phase: "Phase 13", topic: "MCP", label: "MCP Tutorial – Krish Naik", url: "https://youtube.com/@krishnaik06", color: "#2EC4B6" },
  { step: 33, phase: "Phase 13", topic: "A2A Protocol", label: "Google ADK & A2A – Google Developers", url: "https://youtube.com/@GoogleDevelopers", color: "#2EC4B6" },
];

export default function App() {
  const [view, setView] = useState("phase");
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#0a0a0a", minHeight: "100vh", color: "#f0ede8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=JetBrains+Mono:wght@400;500&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body { background: #0a0a0a; }

        .hero {
          position: relative;
          padding: 80px 24px 60px;
          text-align: center;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -100px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(247,37,133,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #F72585;
          margin-bottom: 20px;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 7vw, 78px);
          font-weight: 900;
          line-height: 1.05;
          color: #f0ede8;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }
        .hero-title span {
          color: #F72585;
        }
        .hero-subtitle {
          font-family: 'Crimson Pro', serif;
          font-style: italic;
          font-size: 20px;
          color: #8a8580;
          max-width: 560px;
          margin: 0 auto 40px;
          line-height: 1.5;
        }
        .tab-bar {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 60px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 4px;
          width: fit-content;
          margin: 0 auto 60px;
        }
        .tab-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 1px;
          padding: 10px 24px;
          border: none;
          border-radius: 9px;
          cursor: pointer;
          transition: all 0.2s;
          background: transparent;
          color: #6b6560;
        }
        .tab-btn.active {
          background: #F72585;
          color: #fff;
        }
        .content { max-width: 900px; margin: 0 auto; padding: 0 20px 100px; }
        
        /* PHASE VIEW */
        .phase-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          margin-bottom: 16px;
          overflow: hidden;
          transition: border-color 0.2s;
          background: rgba(255,255,255,0.02);
        }
        .phase-card:hover { border-color: rgba(255,255,255,0.14); }
        .phase-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px 24px;
          cursor: pointer;
          user-select: none;
        }
        .phase-emoji {
          font-size: 28px;
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 12px;
          flex-shrink: 0;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
        }
        .phase-meta { flex: 1; }
        .phase-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #5a5550;
          margin-bottom: 4px;
        }
        .phase-name {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #f0ede8;
        }
        .phase-desc {
          font-family: 'Crimson Pro', serif;
          font-size: 15px;
          color: #7a7570;
          margin-top: 4px;
          font-style: italic;
        }
        .phase-chevron {
          font-size: 18px;
          color: #5a5550;
          transition: transform 0.25s;
          flex-shrink: 0;
        }
        .phase-chevron.open { transform: rotate(180deg); color: #F72585; }
        .phase-body {
          padding: 0 24px 24px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .topic-block { margin-top: 20px; }
        .topic-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 1px;
          color: #a0a098;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .resource-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 6px;
          transition: background 0.15s;
        }
        .resource-row:hover { background: rgba(255,255,255,0.06); }
        .resource-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          padding: 3px 7px;
          border-radius: 5px;
          flex-shrink: 0;
          text-transform: uppercase;
          font-weight: 500;
        }
        .badge-video { background: rgba(247,37,133,0.15); color: #F72585; border: 1px solid rgba(247,37,133,0.25); }
        .badge-doc { background: rgba(58,134,255,0.15); color: #3A86FF; border: 1px solid rgba(58,134,255,0.25); }
        .resource-link {
          font-family: 'Crimson Pro', serif;
          font-size: 16px;
          color: #c0bdb8;
          text-decoration: none;
          flex: 1;
          transition: color 0.15s;
        }
        .resource-link:hover { color: #f0ede8; }
        .ext-icon {
          font-size: 12px;
          color: #4a4540;
          flex-shrink: 0;
        }

        /* VIDEO VIEW */
        .timeline { position: relative; padding-left: 32px; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 11px; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.12) 5%, rgba(255,255,255,0.12) 95%, transparent);
        }
        .video-item {
          position: relative;
          margin-bottom: 14px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .video-dot {
          position: absolute;
          left: -32px;
          top: 14px;
          width: 10px; height: 10px;
          border-radius: 50%;
          border: 2px solid #0a0a0a;
          flex-shrink: 0;
        }
        .video-step {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #4a4540;
          width: 28px;
          flex-shrink: 0;
          padding-top: 14px;
        }
        .video-card {
          flex: 1;
          padding: 14px 16px;
          border-radius: 11px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          transition: background 0.15s, border-color 0.15s;
        }
        .video-card:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); }
        .video-phase-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          color: #5a5550;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .video-topic {
          font-family: 'Crimson Pro', serif;
          font-size: 12px;
          color: #6a6560;
          font-style: italic;
          margin-bottom: 4px;
        }
        .video-title-link {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          color: #c8c5c0;
          text-decoration: none;
          font-weight: 400;
          transition: color 0.15s;
          display: block;
        }
        .video-title-link:hover { color: #f0ede8; }

        .phase-group-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #5a5550;
          margin: 32px 0 16px;
          padding-left: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .phase-group-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.06);
        }

        .footer {
          text-align: center;
          padding: 40px 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .footer-text {
          font-family: 'Crimson Pro', serif;
          font-style: italic;
          font-size: 16px;
          color: #4a4540;
        }
        .footer-text span { color: #F72585; }
      `}</style>

      {/* Hero */}
      <div className="hero">
        <div className="hero-label">Complete Roadmap · 2025–2026</div>
        <h1 className="hero-title">Demigod<br /><span>AI Engineer</span></h1>
        <p className="hero-subtitle">Every resource you need, in exact order — videos and documentation, phase by phase.</p>
        <div className="tab-bar">
          <button className={`tab-btn ${view === "phase" ? "active" : ""}`} onClick={() => setView("phase")}>BY PHASE</button>
          <button className={`tab-btn ${view === "video" ? "active" : ""}`} onClick={() => setView("video")}>BY VIDEO</button>
        </div>
      </div>

      <div className="content">

        {/* PHASE VIEW */}
        {view === "phase" && phases.map((phase) => (
          <div className="phase-card" key={phase.id}>
            <div className="phase-header" onClick={() => toggle(phase.id)}>
              <div className="phase-emoji" style={{ background: phase.color + "18", color: phase.color }}>
                {phase.emoji}
              </div>
              <div className="phase-meta">
                <div className="phase-number">Phase {phase.id}</div>
                <div className="phase-name">{phase.title}</div>
                <div className="phase-desc">{phase.desc}</div>
              </div>
              <div className={`phase-chevron ${expanded === phase.id ? "open" : ""}`}>▾</div>
            </div>

            {expanded === phase.id && (
              <div className="phase-body">
                {phase.topics.map((topic, ti) => (
                  <div className="topic-block" key={ti}>
                    <div className="topic-name">{topic.name}</div>
                    {topic.resources.map((res, ri) => (
                      <div className="resource-row" key={ri}>
                        <span className={`resource-badge ${res.type === "video" ? "badge-video" : "badge-doc"}`}>
                          {res.type === "video" ? "▶ Video" : "📄 Docs"}
                        </span>
                        <a href={res.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                          {res.label}
                        </a>
                        <span className="ext-icon">↗</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* VIDEO VIEW */}
        {view === "video" && (() => {
          const grouped = {};
          allVideos.forEach(v => {
            if (!grouped[v.phase]) grouped[v.phase] = [];
            grouped[v.phase].push(v);
          });
          return (
            <div className="timeline">
              {Object.entries(grouped).map(([phase, vids]) => (
                <div key={phase}>
                  <div className="phase-group-label">{phase}</div>
                  {vids.map((v) => (
                    <div className="video-item" key={v.step}>
                      <div className="video-dot" style={{ background: v.color }} />
                      <div className="video-step">#{v.step}</div>
                      <div className="video-card">
                        <div className="video-phase-tag">{v.phase} · {v.topic}</div>
                        <a href={v.url} target="_blank" rel="noopener noreferrer" className="video-title-link">
                          {v.label} ↗
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          );
        })()}

      </div>

      <div className="footer">
        <p className="footer-text">Built for those who want to go from zero to <span>demigod</span>. No shortcuts.</p>
      </div>
    </div>
  );
}