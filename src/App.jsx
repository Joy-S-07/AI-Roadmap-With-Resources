import { useState } from "react";
import './App.css'

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
          { type: "video", label: "Python Full Course – Code with Harry", url: "https://youtu.be/UrsmFxEIp5k?si=5SR_AMBVUCaFo8Zv" },
          { type: "doc", label: "Python Official Docs", url: "https://docs.python.org/3/" },
          { type: "doc", label: "Real Python Tutorials", url: "https://realpython.com/" },
        ]
      },
      {
        name: "NumPy",
        resources: [
          { type: "video", label: "NumPy Full Course – Sheryians", url: "https://youtu.be/Utgwk0r9Zq4?si=HnsOTMBlIliGI4L4" },
          { type: "doc", label: "NumPy Official Docs", url: "https://numpy.org/doc/stable/" },
        ]
      },
      {
        name: "Pandas",
        resources: [
          { type: "video", label: "Pandas – Sheryians", url: "https://youtu.be/QUaSmqBeR9w?si=K9LQ1SniuXngNaGj" },
          { type: "doc", label: "Pandas Official Docs", url: "https://pandas.pydata.org/docs/" },
        ]
      },
      {
        name: "Matplotlib & Seaborn",
        resources: [
          { type: "video", label: "Data Visualization – Sheryians", url: "https://youtu.be/-jTD74eEy2I?si=OKs-92r2ePaDB6Gf" },
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
          { type: "video", label: "ML Complete Course Parts 1–4 – Sheryians", url: "https://youtube.com/playlist?list=PLaldQ9PzZd9qT0KsKJ7yCq70iFFP3MFJ5&si=Zs0jHcLl1PTpECAi" },
          { type: "doc", label: "Scikit-learn Docs", url: "https://scikit-learn.org/stable/" },
          { type: "doc", label: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
        ]
      },
      {
        name: "Kaggle Practice (1–2 months)",
        resources: [
          { type: "video", label: "Kaggle for Beginners – Abhishek Thakur", url: "https://youtube.com/playlist?list=PL98nY_tJQXZnP-k3qCDd1hljVSciDV9_N&si=SVb0jExOHSkWGPAa" },
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
          { type: "video", label: "DL Part 1 – Sheryians", url: "https://youtu.be/losbBdEjyN4?si=B7BT4NXkQF4QvxGk" },
          { type: "doc", label: "fast.ai Practical DL", url: "https://course.fast.ai/" },
        ]
      },
      {
        name: "CNN (Convolutional Neural Networks)",
        resources: [
          { type: "video", label: "DL Part 2 – Sheryians", url: "https://youtu.be/dh3ilHzIRd0?si=FLTIfRYr9IlLgv_N" },
          { type: "doc", label: "Stanford CS231n Notes", url: "https://cs231n.github.io/" },
        ]
      },
      {
        name: "RNN, LSTM, GRU",
        resources: [
          { type: "video", label: "DL Part 3 – Sheryians", url: "https://youtu.be/0Q4yhrkwn7c?si=CaSYi1C4rc2cRUHV" },
          { type: "doc", label: "Understanding LSTM – Colah's Blog", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
        ]
      },
      {
        name: "Transformers & Attention Mechanism",
        resources: [
          { type: "video", label: "DL Part 4 – Sheryians", url: "https://youtu.be/i2tlbIGyzKk?si=JHthMB13ZkiHtfp-" },
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
          { type: "video", label: "GenAI Part 1 – Sheryians", url: "https://youtu.be/vwncYfhxbR0?si=G-bUczBmn_xa0ETS" },
          { type: "video", label: "Intro to LLMs – Andrej Karpathy", url: "https://youtu.be/zjkBMFhNj_g" },
          { type: "doc", label: "HuggingFace NLP Course", url: "https://huggingface.co/learn/nlp-course" },
        ]
      },
      {
        name: "Fine-tuning LLMs (LoRA, QLoRA)",
        resources: [
          { type: "video", label: "LLM Fine-Tuning Playlist – Krish Naik", url: "https://youtube.com/playlist?list=PLZoTAELRMXVN9VbAx5I2VvloTtYmlApe3&si=oPR5p_L5nyizeh_I" },
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
          { type: "video", label: "Computer Vision Playlist – Krish Naik", url: "https://youtube.com/playlist?list=PLZoTAELRMXVOIBRx0andphYJ7iakSg3Lk&si=_UdFUj50EnJq6zyG" },
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
          { type: "video", label: "NLP – Sheryians", url: "https://youtu.be/yiNS_Sh9KDA?si=3mn3k9ADT2JxsdiJ" },
          { type: "video", label: "Stanford CS224N – NLP with DL", url: "https://youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D&si=vbgbqJKD0xJWa3_6" },
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
          { type: "video", label: "FastAPI Full Course – Sheryians", url: "https://youtu.be/YxT0K5oEehk?si=BvLvS7WLq3PRPQcc" },
          { type: "doc", label: "FastAPI Official Docs", url: "https://fastapi.tiangolo.com/" },
        ]
      },
      {
        name: "Docker",
        resources: [
          { type: "video", label: "Docker for Beginners – Apna College", url: "https://youtu.be/exmSJpJvIPs?si=I41M7Ln4cRmydFbb" },
          { type: "doc", label: "Docker Official Docs", url: "https://docs.docker.com/" },
        ]
      },
      {
        name: "GitHub CI/CD",
        resources: [
          { type: "video", label: "GitHub Actions – Piyush Garg", url: "https://youtu.be/y7S2oSjJ8PA?si=uKETjpPnu33KVrJR" },
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
          { type: "video", label: "MLflow – Krish Naik", url: "https://youtu.be/p1bfK8ZJgkE?si=3ehpLgiuGLAsXWDl" },
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
          { type: "video", label: "GenAI Part 2 – Sheryians", url: "https://youtu.be/yodh-oEFnb4?si=6hAYVwtv8Hk2ziBu" },
          { type: "video", label: "LangChain Full Course – CampusX", url: "https://youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0&si=F3-mbxe04heMdp_a" },
          { type: "doc", label: "LangChain Docs", url: "https://python.langchain.com/docs/introduction/" },
          { type: "doc", label: "LlamaIndex Docs", url: "https://docs.llamaindex.ai/" },
        ]
      },
      {
        name: "Agents & Tool Calling",
        resources: [
          { type: "video", label: "GenAI Part 3 – Sheryians", url: "https://youtu.be/CUDT5E6jz84?si=d1x5MIr--zH5HCAZ" },
          { type: "doc", label: "LangChain Agents Docs", url: "https://python.langchain.com/docs/concepts/agents/" },
          { type: "doc", label: "OpenAI Function Calling", url: "https://platform.openai.com/docs/guides/function-calling" },
        ]
      },
      {
        name: "Graph RAG",
        resources: [
          { type: "video", label: "Graph RAG – Codeverra", url: "https://youtu.be/iNpc5_8irgo?si=YO1Nu8g840uL_IbJ" },
          { type: "doc", label: "GraphRAG Docs – Microsoft", url: "https://microsoft.github.io/graphrag/" },
          { type: "doc", label: "Neo4j Graph RAG Guide", url: "https://neo4j.com/developer-blog/graph-rag/" },
        ]
      },
      {
        name: "Multi-hop RAG",
        resources: [
          { type: "video", label: "Advanced RAG – CampusX", url: "https://youtu.be/41XDn81nR5c?si=U1tX97KxOLqB40Fs" },
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
          { type: "video", label: "Async Python – Code With Harry", url: "https://youtu.be/lgoB3_-ejnI?si=V0aU9zMEwa0WI3vn" },
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
          { type: "video", label: "MCP Tutorial – Krish Naik", url: "https://youtube.com/playlist?list=PLKnIA16_Rmva_oZ9F4ayUu9qcWgF7Fyc0&si=fG5nEipFNsF5JDNm" },
          { type: "doc", label: "MCP Official Docs", url: "https://modelcontextprotocol.io/introduction" },
          { type: "doc", label: "Anthropic MCP Guide", url: "https://docs.anthropic.com/en/docs/agents-and-tools/mcp" },
        ]
      },
      {
        name: "A2A (Agent-to-Agent Protocol)",
        resources: [
          { type: "video", label: "Google ADK & A2A – Google AI", url: "https://youtube.com/playlist?list=PL6tW9BrhiPTAZts0W5nQS9dbW6VMnLKab&si=2iACpI4XKe9WzoBD" },
          { type: "doc", label: "A2A Protocol Spec", url: "https://google.github.io/A2A/" },
          { type: "doc", label: "Google ADK Docs", url: "https://google.github.io/adk-docs/" },
        ]
      },
    ]
  },
];

// Generate `allVideos` from `phases` so the video URLs always match the phase resources.
const allVideos = (() => {
  const videos = [];
  let step = 1;
  phases.forEach((phase) => {
    phase.topics.forEach((topic) => {
      topic.resources.forEach((res) => {
        if (res.type === "video") {
          videos.push({
            step: step++,
            phase: `Phase ${phase.id}`,
            topic: topic.name,
            label: res.label || res.name || topic.name,
            url: res.url,
            color: phase.color,
          });
        }
      });
    });
  });
  return videos;
})();

const projects = [
  {
    phase: "Phase 4 — ML",
    title: "Spam Classifier",
    desc: "Train a Naive Bayes / Logistic Regression model on email data. Deploy with a simple Streamlit UI.",
    tags: ["Scikit-learn", "Pandas", "Streamlit"],
    color: "#FFE66D",
    difficulty: "Beginner",
    resources: [
      { label: "Dataset — SMS Spam Collection", url: "https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset" },
      { label: "Guide — Text Classification with Sklearn", url: "https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html" },
      { label: "Deploy — Streamlit Docs", url: "https://docs.streamlit.io/" },
    ]
  },
  {
    phase: "Phase 4 — ML",
    title: "House Price Predictor",
    desc: "End-to-end regression with EDA, feature engineering, and model comparison. Practice the full ML pipeline.",
    tags: ["Scikit-learn", "Pandas", "Matplotlib"],
    color: "#FFE66D",
    difficulty: "Beginner",
    resources: [
      { label: "Dataset — Kaggle House Prices", url: "https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques" },
      { label: "Guide — EDA with Pandas", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html" },
      { label: "Guide — Regression Models Sklearn", url: "https://scikit-learn.org/stable/supervised_learning.html" },
    ]
  },
  {
    phase: "Phase 4 — ML",
    title: "Customer Churn Predictor",
    desc: "Binary classification on telecom data. Practice class imbalance handling, SMOTE, and ROC-AUC evaluation.",
    tags: ["Scikit-learn", "imbalanced-learn", "Seaborn"],
    color: "#FFE66D",
    difficulty: "Beginner",
    resources: [
      { label: "Dataset — Telco Customer Churn", url: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn" },
      { label: "Guide — Handling Imbalanced Data", url: "https://imbalanced-learn.org/stable/user_guide.html" },
      { label: "Guide — Classification Metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
    ]
  },
  {
    phase: "Phase 4 — ML",
    title: "Movie Recommendation Engine",
    desc: "Build a collaborative filtering + content-based hybrid recommender. Use the MovieLens dataset.",
    tags: ["Scikit-learn", "Pandas", "Surprise"],
    color: "#FFE66D",
    difficulty: "Intermediate",
    resources: [
      { label: "Dataset — MovieLens", url: "https://grouplens.org/datasets/movielens/" },
      { label: "Guide — Recommender Systems", url: "https://surprise.readthedocs.io/en/stable/" },
      { label: "Tutorial — Collaborative Filtering", url: "https://realpython.com/build-recommendation-engine-collaborative-filtering/" },
    ]
  },
  {
    phase: "Phase 5 — Deep Learning",
    title: "Handwritten Digit Recognizer",
    desc: "CNN on MNIST. Build a canvas in the browser where users draw digits and the model predicts in real time.",
    tags: ["PyTorch", "CNN", "FastAPI", "React"],
    color: "#C77DFF",
    difficulty: "Beginner",
    resources: [
      { label: "Dataset — MNIST via PyTorch", url: "https://pytorch.org/vision/stable/datasets.html#mnist" },
      { label: "Guide — CNN in PyTorch", url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html" },
      { label: "Guide — FastAPI + React integration", url: "https://fastapi.tiangolo.com/tutorial/" },
    ]
  },
  {
    phase: "Phase 5 — Deep Learning",
    title: "Sentiment Analysis API",
    desc: "Fine-tune a small Transformer on movie reviews. Wrap in FastAPI, containerize with Docker, deploy to cloud.",
    tags: ["PyTorch", "Transformers", "FastAPI", "Docker"],
    color: "#C77DFF",
    difficulty: "Intermediate",
    resources: [
      { label: "Dataset — IMDB Reviews", url: "https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews" },
      { label: "Guide — Fine-tuning with HuggingFace", url: "https://huggingface.co/docs/transformers/training" },
      { label: "Guide — Docker for ML", url: "https://docs.docker.com/guides/use-case/model-inference/" },
    ]
  },
  {
    phase: "Phase 5 — Deep Learning",
    title: "Neural Style Transfer",
    desc: "Transfer the style of a painting onto any photo using VGG19 feature maps. Build an interactive web UI.",
    tags: ["PyTorch", "VGG19", "Streamlit"],
    color: "#C77DFF",
    difficulty: "Intermediate",
    resources: [
      { label: "Paper — A Neural Algorithm of Artistic Style", url: "https://arxiv.org/abs/1508.06576" },
      { label: "Guide — NST in PyTorch", url: "https://pytorch.org/tutorials/advanced/neural_style_tutorial.html" },
      { label: "Guide — Streamlit Image Apps", url: "https://docs.streamlit.io/develop/api-reference/media" },
    ]
  },
  {
    phase: "Phase 5 — Deep Learning",
    title: "Text Generation with LSTM",
    desc: "Train a character-level LSTM on a book corpus. Generate new text in the style of the original author.",
    tags: ["PyTorch", "LSTM", "NLP"],
    color: "#C77DFF",
    difficulty: "Intermediate",
    resources: [
      { label: "Dataset — Project Gutenberg Books", url: "https://www.gutenberg.org/" },
      { label: "Guide — LSTM Text Generation", url: "https://pytorch.org/tutorials/beginner/nlp/sequence_models_tutorial.html" },
      { label: "Blog — Karpathy on RNNs", url: "https://karpathy.github.io/2015/05/21/rnn-effectiveness/" },
    ]
  },
  {
    phase: "Phase 6 — LLMs",
    title: "LLM Fine-tuning on Custom Data",
    desc: "Fine-tune Mistral or LLaMA 3 using QLoRA on a domain-specific dataset. Push the adapter to HuggingFace Hub.",
    tags: ["QLoRA", "HuggingFace", "PEFT", "Unsloth"],
    color: "#F72585",
    difficulty: "Advanced",
    resources: [
      { label: "Guide — PEFT & LoRA Docs", url: "https://huggingface.co/docs/peft/conceptual_guides/lora" },
      { label: "Guide — Unsloth Fast Fine-tuning", url: "https://github.com/unslothai/unsloth" },
      { label: "Guide — HuggingFace Hub Upload", url: "https://huggingface.co/docs/huggingface_hub/guides/upload" },
      { label: "Dataset — Alpaca Format Guide", url: "https://crfm.stanford.edu/2023/03/13/alpaca.html" },
    ]
  },
  {
    phase: "Phase 6 — LLMs",
    title: "Build GPT from Scratch",
    desc: "Implement a mini GPT in pure PyTorch — tokenizer, attention heads, transformer blocks. Train on Shakespeare.",
    tags: ["PyTorch", "Transformers", "Tokenizer"],
    color: "#F72585",
    difficulty: "Advanced",
    resources: [
      { label: "Tutorial — Let's build GPT (Karpathy)", url: "https://youtu.be/kCc8FmEb1nY" },
      { label: "Paper — Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
      { label: "Dataset — Shakespeare Corpus", url: "https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt" },
    ]
  },
  {
    phase: "Phase 7 — Computer Vision",
    title: "Real-time Object Detector",
    desc: "YOLO-based object detection on webcam feed. Detect, count, and annotate objects live with bounding boxes.",
    tags: ["YOLOv8", "OpenCV", "PyTorch"],
    color: "#06D6A0",
    difficulty: "Intermediate",
    resources: [
      { label: "Guide — Ultralytics YOLOv8 Docs", url: "https://docs.ultralytics.com/" },
      { label: "Guide — OpenCV Webcam Capture", url: "https://docs.opencv.org/4.x/dd/d43/tutorial_py_video_display.html" },
      { label: "Dataset — COCO Dataset", url: "https://cocodataset.org/" },
    ]
  },
  {
    phase: "Phase 7 — Computer Vision",
    title: "Face Mask Detector",
    desc: "Binary image classifier to detect mask/no-mask in real time from webcam. Practice transfer learning with MobileNet.",
    tags: ["PyTorch", "MobileNet", "OpenCV", "Transfer Learning"],
    color: "#06D6A0",
    difficulty: "Intermediate",
    resources: [
      { label: "Dataset — Face Mask Dataset", url: "https://www.kaggle.com/datasets/omkargurav/face-mask-dataset" },
      { label: "Guide — Transfer Learning PyTorch", url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html" },
      { label: "Guide — OpenCV Real-time Detection", url: "https://docs.opencv.org/4.x/d9/df8/tutorial_root.html" },
    ]
  },
  {
    phase: "Phase 7 — Computer Vision",
    title: "Image Segmentation App",
    desc: "Use Meta's SAM2 to segment any object in an image with a click. Build a Gradio UI to demo it.",
    tags: ["SAM2", "Meta AI", "Gradio", "PyTorch"],
    color: "#06D6A0",
    difficulty: "Advanced",
    resources: [
      { label: "Guide — SAM2 GitHub", url: "https://github.com/facebookresearch/segment-anything-2" },
      { label: "Guide — Gradio Docs", url: "https://www.gradio.app/docs" },
      { label: "Dataset — COCO Segmentation", url: "https://cocodataset.org/#stuff-2018" },
    ]
  },
  {
    phase: "Phase 8 — NLP",
    title: "Named Entity Recognition (NER) System",
    desc: "Fine-tune BERT for NER on medical or legal text. Extract people, orgs, dates, and custom entities.",
    tags: ["HuggingFace", "BERT", "spaCy", "Transformers"],
    color: "#FF9F1C",
    difficulty: "Intermediate",
    resources: [
      { label: "Guide — Token Classification HuggingFace", url: "https://huggingface.co/docs/transformers/tasks/token_classification" },
      { label: "Dataset — CoNLL-2003 NER", url: "https://huggingface.co/datasets/conll2003" },
      { label: "Guide — spaCy NER", url: "https://spacy.io/usage/linguistic-features#named-entities" },
    ]
  },
  {
    phase: "Phase 8 — NLP",
    title: "News Summarizer",
    desc: "Use a pre-trained T5 or BART model to summarize news articles. Add URL input that scrapes and summarizes live.",
    tags: ["HuggingFace", "T5", "BeautifulSoup", "FastAPI"],
    color: "#FF9F1C",
    difficulty: "Intermediate",
    resources: [
      { label: "Guide — Summarization with HuggingFace", url: "https://huggingface.co/docs/transformers/tasks/summarization" },
      { label: "Guide — BeautifulSoup Web Scraping", url: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/" },
      { label: "Dataset — CNN/DailyMail", url: "https://huggingface.co/datasets/cnn_dailymail" },
    ]
  },
  {
    phase: "Phase 9 — MLOps",
    title: "Full ML Pipeline with CI/CD",
    desc: "Complete MLOps project — DVC for data versioning, MLflow for experiment tracking, GitHub Actions for auto-deploy to cloud.",
    tags: ["DVC", "MLflow", "GitHub Actions", "Docker", "AWS"],
    color: "#3A86FF",
    difficulty: "Advanced",
    resources: [
      { label: "Guide — DVC Get Started", url: "https://dvc.org/doc/start" },
      { label: "Guide — MLflow Tracking", url: "https://mlflow.org/docs/latest/tracking.html" },
      { label: "Guide — GitHub Actions for ML", url: "https://docs.github.com/en/actions/use-cases-and-examples/publishing-packages/publishing-docker-images" },
      { label: "Course — MLOps Zoomcamp (Free)", url: "https://github.com/DataTalksClub/mlops-zoomcamp" },
    ]
  },
  {
    phase: "Phase 9 — MLOps",
    title: "Model Monitoring Dashboard",
    desc: "Deploy a model and monitor data drift, prediction drift, and performance decay over time using Evidently AI.",
    tags: ["Evidently AI", "FastAPI", "Docker", "Grafana"],
    color: "#3A86FF",
    difficulty: "Advanced",
    resources: [
      { label: "Guide — Evidently AI Docs", url: "https://docs.evidentlyai.com/" },
      { label: "Guide — Grafana Dashboards", url: "https://grafana.com/docs/grafana/latest/getting-started/" },
      { label: "Tutorial — ML Monitoring Guide", url: "https://www.evidentlyai.com/ml-in-production/ml-monitoring" },
    ]
  },
  {
    phase: "Phase 10 — GenAI",
    title: "RAG Chatbot on Your Docs",
    desc: "Upload PDFs, chunk and embed them into ChromaDB, query with LangChain. Add streaming chat UI with source citations.",
    tags: ["LangChain", "ChromaDB", "FastAPI", "React"],
    color: "#FF6B6B",
    difficulty: "Intermediate",
    resources: [
      { label: "Guide — LangChain RAG Tutorial", url: "https://python.langchain.com/docs/tutorials/rag/" },
      { label: "Guide — ChromaDB Docs", url: "https://docs.trychroma.com/getting-started" },
      { label: "Guide — PDF Loader LangChain", url: "https://python.langchain.com/docs/how_to/document_loader_pdf/" },
      { label: "Guide — Streaming with FastAPI", url: "https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse" },
    ]
  },
  {
    phase: "Phase 10 — GenAI",
    title: "AI Agent with Tool Calling",
    desc: "Build an agent that can search the web, run Python code, and read files autonomously. Add memory between sessions.",
    tags: ["LangChain", "Agents", "Async", "Tools"],
    color: "#FF6B6B",
    difficulty: "Advanced",
    resources: [
      { label: "Guide — LangChain Agents", url: "https://python.langchain.com/docs/concepts/agents/" },
      { label: "Guide — Tool Calling", url: "https://python.langchain.com/docs/concepts/tool_calling/" },
      { label: "Guide — Agent Memory", url: "https://python.langchain.com/docs/concepts/memory/" },
    ]
  },
  {
    phase: "Phase 10 — GenAI",
    title: "Graph RAG Knowledge Base",
    desc: "Build a knowledge graph from documents using Neo4j. Query it with natural language via Graph RAG for multi-hop reasoning.",
    tags: ["Neo4j", "GraphRAG", "LangChain", "LLM"],
    color: "#FF6B6B",
    difficulty: "Advanced",
    resources: [
      { label: "Guide — Microsoft GraphRAG", url: "https://microsoft.github.io/graphrag/" },
      { label: "Guide — Neo4j + LangChain", url: "https://python.langchain.com/docs/integrations/graphs/neo4j_cypher/" },
      { label: "Guide — Neo4j Graph DB Docs", url: "https://neo4j.com/docs/" },
    ]
  },
  {
    phase: "Phase 11 — Multimodal",
    title: "Visual Question Answering App",
    desc: "Upload an image and ask questions about it in natural language. Use LLaVA or Gemini Vision API under the hood.",
    tags: ["LLaVA", "Gemini API", "Gradio", "Multimodal"],
    color: "#7B2FBE",
    difficulty: "Advanced",
    resources: [
      { label: "Guide — Google Gemini Vision", url: "https://ai.google.dev/gemini-api/docs/vision" },
      { label: "Guide — LLaVA on HuggingFace", url: "https://huggingface.co/docs/transformers/model_doc/llava" },
      { label: "Guide — Gradio Image Input", url: "https://www.gradio.app/docs/gradio/image" },
    ]
  },
  {
    phase: "Phase 11 — Multimodal",
    title: "AI Image Caption Generator",
    desc: "Generate descriptive captions for any image using BLIP-2 or Florence-2. Build a drag-and-drop web interface.",
    tags: ["BLIP-2", "Florence-2", "HuggingFace", "FastAPI"],
    color: "#7B2FBE",
    difficulty: "Intermediate",
    resources: [
      { label: "Guide — BLIP-2 HuggingFace", url: "https://huggingface.co/docs/transformers/model_doc/blip-2" },
      { label: "Guide — Florence-2 by Microsoft", url: "https://huggingface.co/microsoft/Florence-2-large" },
      { label: "Guide — Image Pipelines HuggingFace", url: "https://huggingface.co/docs/transformers/pipeline_tutorial" },
    ]
  },
  {
    phase: "Phase 13 — MCP & A2A",
    title: "Custom MCP Server",
    desc: "Build a custom MCP server that exposes tools — file reader, web search, code runner. Connect it to Claude Desktop.",
    tags: ["MCP", "Claude API", "Python", "Async"],
    color: "#2EC4B6",
    difficulty: "Advanced",
    resources: [
      { label: "Guide — MCP Official Docs", url: "https://modelcontextprotocol.io/introduction" },
      { label: "Guide — Building MCP Servers", url: "https://modelcontextprotocol.io/quickstart/server" },
      { label: "Guide — Anthropic MCP Guide", url: "https://docs.anthropic.com/en/docs/agents-and-tools/mcp" },
    ]
  },
  {
    phase: "Phase 13 — MCP & A2A",
    title: "Multi-Agent A2A System",
    desc: "Build two specialized agents that communicate via the A2A protocol — one for research, one for writing. Orchestrate with Google ADK.",
    tags: ["A2A", "Google ADK", "LangChain", "Async"],
    color: "#2EC4B6",
    difficulty: "Advanced",
    resources: [
      { label: "Guide — A2A Protocol Spec", url: "https://google.github.io/A2A/" },
      { label: "Guide — Google ADK Docs", url: "https://google.github.io/adk-docs/" },
      { label: "Guide — Multi-Agent Systems", url: "https://python.langchain.com/docs/concepts/multi_agent/" },
    ]
  },
];

export default function App() {
  const [view, setView] = useState("phase");
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#0a0a0a", minHeight: "100vh", color: "#f0ede8" }}>

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

        {/* PROJECTS SECTION */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {projects.map((p, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${p.color}22`,
              borderRadius: "16px",
              padding: "22px",
              transition: "background 0.2s, border-color 0.2s",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = p.color + "55"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = p.color + "22"; }}
            >
              {/* Top accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: p.color, opacity: 0.6 }} />

              {/* Phase + Difficulty */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: p.color, opacity: 0.8 }}>
                  {p.phase}
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  padding: "3px 8px",
                  borderRadius: "5px",
                  letterSpacing: "1px",
                  background: p.difficulty === "Beginner" ? "rgba(6,214,160,0.12)" : p.difficulty === "Intermediate" ? "rgba(255,159,28,0.12)" : "rgba(247,37,133,0.12)",
                  border: `1px solid ${p.difficulty === "Beginner" ? "rgba(6,214,160,0.3)" : p.difficulty === "Intermediate" ? "rgba(255,159,28,0.3)" : "rgba(247,37,133,0.3)"}`,
                  color: p.difficulty === "Beginner" ? "#06D6A0" : p.difficulty === "Intermediate" ? "#FF9F1C" : "#F72585",
                }}>
                  {p.difficulty}
                </span>
              </div>

              {/* Title + Desc */}
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#f0ede8", marginBottom: "8px" }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "15px", color: "#7a7570", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {p.tags.map((tag, ti) => (
                  <span key={ti} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    padding: "3px 9px",
                    borderRadius: "6px",
                    background: p.color + "15",
                    border: `1px solid ${p.color}30`,
                    color: p.color,
                    letterSpacing: "0.5px",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Resources */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "#4a4540", marginBottom: "4px" }}>
                  Resources
                </div>
                {p.resources.map((r, ri) => (
                  <a key={ri} href={r.url} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: "14px",
                    color: "#6a6560",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.15s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = p.color}
                    onMouseLeave={e => e.currentTarget.style.color = "#6a6560"}
                  >
                    <span style={{ color: p.color, fontSize: "10px", flexShrink: 0 }}>→</span>
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <p className="footer-text">Built for those who want to go from zero to <span>demigod</span>. No shortcuts.</p>
  
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
          <a href="https://github.com/Joy-S-07" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#c0bdb8", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", transition: "all 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            Joy-S-07
          </a>

          <a href="https://linkedin.com/in/beinggojo" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "10px", background: "rgba(10,102,194,0.12)", border: "1px solid rgba(10,102,194,0.3)", color: "#5b9bd5", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", transition: "all 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(10,102,194,0.22)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(10,102,194,0.12)"}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            beinggojo
          </a>

          <a href="https://github.com/Joy-S-07/AI-Roadmap-With-Resources" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "10px", background: "rgba(247,37,133,0.1)", border: "1px solid rgba(247,37,133,0.3)", color: "#F72585", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", transition: "all 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(247,37,133,0.2)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(247,37,133,0.1)"}>
            ⭐ Star & Contribute
          </a>
        </div>

        <p style={{ fontFamily: "'Crimson Pro', serif", fontStyle: "italic", fontSize: "13px", color: "#3a3530", marginTop: "28px" }}>
          Open to contributions — PRs welcome
        </p>
      </div>
    </div>
  );
}