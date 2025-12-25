
export interface Resource {
  title: string;
  author?: string;
  url: string;
  type: 'Article' | 'Video' | 'Book' | 'Course' | 'Tool' | 'Paper';
  rating: number; // 1-10
  description: string;
  featured?: boolean;
}

export interface NodeData {
  id: string;
  title: string;
  category: string;
  description: string;
  resources: Resource[];
  x: number;
  y: number;
  dependencies: string[];
}

export const graphData: NodeData[] = [
  {
    "id": "ml_basics",
    "title": "ML Foundations",
    "category": "ML Basics",
    "description": "Essential machine learning concepts and courses to build a foundation before diving into AI security.",
    "resources": [
      {
        "title": "Stanford CS229: Machine Learning",
        "url": "https://cs229.stanford.edu/",
        "type": "Course",
        "rating": 8,
        "description": "Stanford's foundational ML course covering supervised learning, deep learning, generalization, and unsupervised learning. Taught by leaders in the field."
      },
      {
        "title": "fast.ai Practical Deep Learning for Coders",
        "url": "https://course.fast.ai/",
        "type": "Course",
        "rating": 8,
        "description": "Free, top-down approach to deep learning with PyTorch. Covers computer vision, NLP, and tabular data with hands-on Jupyter notebooks."
      },
      {
        "title": "Deep Learning Specialization by Andrew Ng",
        "url": "https://www.coursera.org/specializations/deep-learning",
        "type": "Course",
        "rating": 8,
        "description": "A fantastic 5-course series on neural networks and deep learning fundamentals—beginner-friendly and taught by AI pioneer Andrew Ng. Auditable for free."
      }
    ],
    "x": 0,
    "y": 0,
    "dependencies": []
  },
  {
    "id": "dl_fundamentals",
    "title": "Deep Learning",
    "category": "Deep Learning",
    "description": "Deep dive into neural networks, transformers, and the architectures behind modern AI systems.",
    "resources": [
      {
        "title": "Dive into Deep Learning",
        "url": "https://d2l.ai/",
        "type": "Book",
        "rating": 8,
        "description": "Interactive deep learning book with code (PyTorch, JAX, TensorFlow), math, and exercises. Adopted at 500+ universities including Stanford, MIT, Harvard."
      },
      {
        "title": "Neural Networks and Deep Learning (Michael Nielsen)",
        "url": "http://neuralnetworksanddeeplearning.com/",
        "type": "Book",
        "rating": 8,
        "description": "Free online book explaining the core concepts behind neural networks with excellent intuition and interactive visualizations."
      },
      {
        "title": "Deep Learning by Ian Goodfellow, Yoshua Bengio, Aaron Courville",
        "url": "https://www.deeplearningbook.org/",
        "type": "Book",
        "rating": 8,
        "description": "The go-to textbook for deep learning theory and math. Freely available online."
      }
    ],
    "x": 0,
    "y": 1,
    "dependencies": [
      "ml_basics"
    ]
  },
  {
    "id": "prompt_injection",
    "title": "Prompt Injection",
    "category": "Prompt Injection",
    "description": "Understand prompt injection attacks that manipulate LLM behavior through crafted inputs.",
    "resources": [
      {
        "title": "Prompt Injection & the Rise of Prompt Attacks: All You Need to Know",
        "url": "https://www.lakera.ai/blog/guide-to-prompt-injection",
        "type": "Article",
        "rating": 8,
        "description": "Explains prompt injection threats, examples, and mitigations."
      },
      {
        "title": "OpenAI Says AI Browsers May Always Be Vulnerable to Prompt Injection Attacks",
        "url": "https://techcrunch.com/2025/12/22/openai-says-ai-browsers-may-always-be-vulnerable-to-prompt-injection-attacks/",
        "type": "Article",
        "rating": 8,
        "description": "Discusses ongoing risks and hardening efforts for agentic AI like Atlas."
      },
      {
        "title": "Prompt Injection Attacks in 2025: Risks, Defenses & Testing",
        "url": "https://redbotsecurity.com/prompt-injection-attacks-ai-security-2025/",
        "type": "Article",
        "rating": 8,
        "description": "Mainstream risks and testing strategies for prompt injections."
      },
      {
        "title": "Prompt Injection Attacks: The Most Common AI Exploit in 2025",
        "url": "https://www.obsidiansecurity.com/blog/prompt-injection",
        "type": "Article",
        "rating": 8,
        "description": "Detection, blocking, and mitigation for growing prompt injection threats."
      },
      {
        "title": "LLM01:2025 Prompt Injection",
        "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
        "type": "Article",
        "rating": 8,
        "description": "Updated risk overview for manipulating model behavior. OWASP Gen AI Security Project, 2025."
      },
      {
        "title": "Rebuff",
        "url": "https://github.com/protectai/rebuff",
        "type": "Tool",
        "rating": 8,
        "description": "Self-hardening prompt injection detector by ProtectAI."
      },
      {
        "title": "Garak",
        "url": "https://github.com/NVIDIA/garak",
        "type": "Tool",
        "rating": 8,
        "description": "NVIDIA's LLM vulnerability scanner with dozens of plugins testing for jailbreaks, prompt injection, data leakage, and more."
      },
      {
        "title": "Vigil LLM",
        "url": "https://github.com/deadbits/vigil-llm",
        "type": "Tool",
        "rating": 8,
        "description": "Detects prompt injections and risky inputs."
      },
      {
        "title": "EasyJailbreak",
        "url": "https://github.com/EasyJailbreak/EasyJailbreak",
        "type": "Tool",
        "rating": 8,
        "description": "Framework for adversarial jailbreak prompts."
      },
      {
        "title": "AI Village @ DEF CON",
        "url": "https://aivillage.org/",
        "type": "Article",
        "rating": 8,
        "description": "Challenges like LLM Jailbreak and AI security research."
      }
    ],
    "x": -1.8,
    "y": 2,
    "dependencies": [
      "dl_fundamentals"
    ]
  },
  {
    "id": "adversarial_attacks",
    "title": "Adversarial Attacks",
    "category": "Adversarial Attacks",
    "description": "Learn how adversarial examples fool neural networks and methods to defend against them.",
    "resources": [
      {
        "title": "A Brief Introduction to Adversarial Examples",
        "url": "https://gradientscience.org/intro_adversarial/",
        "type": "Article",
        "rating": 8,
        "description": "High-level overview of adversarial examples fooling neural networks by Madry and Schmidt."
      },
      {
        "title": "Key Concepts in AI Safety: Robustness and Adversarial Examples",
        "url": "https://cset.georgetown.edu/publication/key-concepts-in-ai-safety-robustness-and-adversarial-examples/",
        "type": "Paper",
        "rating": 8,
        "description": "Places adversarial robustness in AI safety context."
      },
      {
        "title": "A Meta-Survey of Adversarial Attacks Against Artificial Intelligence Systems",
        "url": "https://www.sciencedirect.com/science/article/pii/S0925231225019034",
        "type": "Paper",
        "rating": 8,
        "description": "Umbrella review of attacks on DNNs. Neurocomputing, 2025."
      },
      {
        "title": "Adversarial Attacks and Defenses in AI Systems: Challenges, Strategies, and Future Directions",
        "url": "https://rsisinternational.org/journals/ijrias/articles/adversarial-attacks-and-defenses-in-ai-systems-challenges-strategies-and-future-directions/",
        "type": "Paper",
        "rating": 8,
        "description": "Comprehensive review of attacks and defenses. RSIS International, 2025."
      },
      {
        "title": "A Survey of Adversarial Examples in Computer Vision",
        "url": "https://wujns.edpsciences.org/articles/wujns/full_html/2025/01/wujns-1007-1202-2025-01-0001-20/wujns-1007-1202-2025-01-0001-20.html",
        "type": "Paper",
        "rating": 8,
        "description": "Attack algorithms and defenses for vision models. 2025."
      },
      {
        "title": "Adversarial Robustness Toolbox (ART)",
        "url": "https://github.com/Trusted-AI/adversarial-robustness-toolbox",
        "type": "Tool",
        "rating": 8,
        "description": "IBM library for attacks and defenses for ML security."
      },
      {
        "title": "TextAttack",
        "url": "https://github.com/QData/TextAttack",
        "type": "Tool",
        "rating": 8,
        "description": "Library for adversarial attacks on NLP models."
      },
      {
        "title": "NIST Adversarial ML Taxonomy",
        "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Standardized terminology and mitigations. NIST IR 100-2, 2025."
      },
      {
        "title": "ACL 2024 Tutorial: Vulnerabilities of LLMs to Adversarial Attacks",
        "url": "https://llm-vulnerability.github.io/",
        "type": "Paper",
        "rating": 8,
        "description": "Comprehensive overview of vulnerabilities in unimodal and multimodal LLMs from NLP and cybersecurity perspectives."
      }
    ],
    "x": -1.8,
    "y": 3,
    "dependencies": [
      "dl_fundamentals"
    ]
  },
  {
    "id": "poisoning_backdoors",
    "title": "Poisoning & Backdoors",
    "category": "Poisoning & Backdoors",
    "description": "Data poisoning attacks and neural network backdoors that compromise model integrity.",
    "resources": [
      {
        "title": "Witches' Brew: Industrial Scale Data Poisoning via Gradient Matching",
        "url": "https://arxiv.org/abs/2009.02276",
        "type": "Paper",
        "rating": 8,
        "description": "Clean-label poisoning at scale. arXiv:2009.02276, 2021."
      },
      {
        "title": "Instruction Backdoor Attacks on Customized LLMs",
        "url": "https://arxiv.org/abs/2402.09179",
        "type": "Paper",
        "rating": 8,
        "description": "Prompt-based backdoors in custom LLMs without weight modification. arXiv:2402.09179, 2024."
      },
      {
        "title": "Poisoning Attacks Need Only a Few Points",
        "url": "https://arxiv.org/abs/2510.07192",
        "type": "Paper",
        "rating": 8,
        "description": "Constant-size poisoning effective even on web-scale models. arXiv:2510.07192, 2025."
      },
      {
        "title": "MNTD: Detecting AI Trojans Using Meta Neural Analysis",
        "url": "https://arxiv.org/abs/1910.03137",
        "type": "Paper",
        "rating": 8,
        "description": "Black-box Trojan detection with high AUC. arXiv:1910.03137, 2021."
      },
      {
        "title": "Beatrix: Robust Backdoor Detection via Gram Matrices",
        "url": "https://www.ndss-symposium.org/wp-content/uploads/2024/09/2023-69-slides.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Activation-based detection effective against advanced backdoors. NDSS 2024."
      },
      {
        "title": "OWASP Top 10 for LLM Applications 2025",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        "type": "Article",
        "rating": 8,
        "description": "Critical risks including prompt injection, sensitive info disclosure, supply chain, and data poisoning."
      }
    ],
    "x": -1.9440000000000002,
    "y": 4,
    "dependencies": [
      "adversarial_attacks"
    ]
  },
  {
    "id": "privacy_extraction",
    "title": "Privacy & Extraction",
    "category": "Privacy & Extraction",
    "description": "Model extraction, membership inference, and training data extraction attacks.",
    "resources": [
      {
        "title": "Extracting Training Data from Large Language Models",
        "url": "https://www.usenix.org/conference/usenixsecurity21/presentation/carlini-extracting",
        "type": "Paper",
        "rating": 8,
        "description": "Privacy attacks via memorization. USENIX Security 2021."
      },
      {
        "title": "Model Leeching: An Extraction Attack Targeting LLMs",
        "url": "https://arxiv.org/abs/2309.10544",
        "type": "Paper",
        "rating": 8,
        "description": "Practical model stealing from GPT-3.5 via API queries. arXiv:2309.10544, 2023."
      },
      {
        "title": "A Watermark for Large Language Models",
        "url": "https://arxiv.org/abs/2301.10226",
        "type": "Paper",
        "rating": 8,
        "description": "Statistical watermarking for detecting AI-generated text. arXiv:2301.10226, 2023."
      },
      {
        "title": "Membership Inference Attacks on Machine Learning: A Survey",
        "url": "https://arxiv.org/abs/2103.07853",
        "type": "Paper",
        "rating": 8,
        "description": "First comprehensive survey on MIAs with taxonomies for attacks and defenses. ACM Computing Surveys."
      },
      {
        "title": "A Survey of Privacy Attacks in Machine Learning",
        "url": "https://dl.acm.org/doi/10.1145/3624010",
        "type": "Paper",
        "rating": 8,
        "description": "Covers membership inference, reconstruction, and model extraction attacks. ACM Computing Surveys."
      },
      {
        "title": "Membership Inference Attacks on Large-Scale Models: A Survey",
        "url": "https://arxiv.org/abs/2503.19338",
        "type": "Paper",
        "rating": 8,
        "description": "MIAs targeting LLMs and LMMs across pre-training, fine-tuning, and RAG. arXiv:2503.19338, 2025."
      },
      {
        "title": "TrustLLM Benchmark",
        "url": "https://trustllmbenchmark.github.io/TrustLLM-Website/",
        "type": "Article",
        "rating": 8,
        "description": "Comprehensive trustworthiness benchmark spanning truthfulness, safety, fairness, robustness, privacy, and ethics."
      },
      {
        "title": "awesome-ml-privacy-attacks",
        "url": "https://github.com/stratosphereips/awesome-ml-privacy-attacks",
        "type": "Article",
        "rating": 8,
        "description": "Curated list of 100+ papers on privacy attacks against machine learning."
      },
      {
        "title": "LLM Security Papers (chawins/llm-sp)",
        "url": "https://github.com/chawins/llm-sp",
        "type": "Paper",
        "rating": 8,
        "description": "Papers and resources on LLM security and privacy including indirect prompt injection research."
      }
    ],
    "x": -2.088,
    "y": 5,
    "dependencies": [
      "adversarial_attacks"
    ]
  },
  {
    "id": "tools_hacking_ai",
    "title": "Tools & Frameworks",
    "category": "Tools - Hacking AI",
    "description": "Security tools for testing and defending AI systems against adversarial attacks.",
    "resources": [
      {
        "title": "Counterfit",
        "url": "https://github.com/Azure/counterfit",
        "type": "Tool",
        "rating": 8,
        "description": "Microsoft penetration testing tool for ML systems."
      },
      {
        "title": "AI Coding Tools Exploded in 2025: The First Security Exploits Followed",
        "url": "https://fortune.com/2025/12/15/ai-coding-tools-security-exploit-software/",
        "type": "Article",
        "rating": 8,
        "description": "Discusses vulnerabilities in AI-generated code."
      },
      {
        "title": "AI Agent Exploit Generation in Smart Contracts",
        "url": "https://www.emergentmind.com/topics/ai-agent-smart-contract-exploit-generation",
        "type": "Paper",
        "rating": 8,
        "description": "Autonomous exploit generation using LLMs."
      },
      {
        "title": "AI-Powered Attack Automation: When Machine Learning Writes the Exploit Code",
        "url": "https://medium.com/@instatunnel/wwai-powered-attack-automation-when-machine-learning-writes-the-exploit-code-9eb00af91a51",
        "type": "Article",
        "rating": 8,
        "description": "Projections on AI-driven cyberattacks."
      },
      {
        "title": "NeMo Guardrails",
        "url": "https://github.com/NVIDIA/NeMo-Guardrails",
        "type": "Tool",
        "rating": 8,
        "description": "NVIDIA programmable guardrails for LLM safety and security."
      },
      {
        "title": "SecML",
        "url": "https://secml.readthedocs.io/",
        "type": "Tool",
        "rating": 8,
        "description": "Secure and explainable ML library with attacks and defenses."
      },
      {
        "title": "Purple Llama (Meta)",
        "url": "https://github.com/meta-llama/PurpleLlama",
        "type": "Tool",
        "rating": 8,
        "description": "Open-source LLM safety tools including Llama Guard, Prompt Guard, Code Shield, and CyberSec Eval benchmarks."
      }
    ],
    "x": -2.232,
    "y": 6,
    "dependencies": [
      "prompt_injection",
      "adversarial_attacks"
    ]
  },
  {
    "id": "ai_pentesting",
    "title": "AI Pentesting",
    "category": "AI Pentesting",
    "description": "Using AI assistants and agents for automated penetration testing and security assessments.",
    "resources": [
      {
        "title": "PentestGPT",
        "url": "https://github.com/GreyDGL/PentestGPT",
        "type": "Tool",
        "rating": 8,
        "description": "GPT-4 powered autonomous penetration testing agent. Published at USENIX Security 2024."
      },
      {
        "title": "Top 10 AI Pentesting Tools (2025)",
        "url": "https://mindgard.ai/blog/top-ai-pentesting-tools",
        "type": "Article",
        "rating": 8,
        "description": "Highlights tools like Mindgard, Burp Suite, and PentestGPT."
      },
      {
        "title": "Best AI Pentesting Tools in 2026",
        "url": "https://escape.tech/blog/best-ai-pentesting-tools/",
        "type": "Article",
        "rating": 8,
        "description": "Focus on detecting business logic flaws."
      },
      {
        "title": "9 AI Enabled Cybersecurity Tools in 2025",
        "url": "https://www.packetlabs.net/posts/9-ai-enabled-cybersecurity-tools-in-2025/",
        "type": "Article",
        "rating": 8,
        "description": "Includes PenTest++ and CIPHER for ethical hacking."
      },
      {
        "title": "Top AI Pentesting Tools in 2025: PentestGPT vs. Penligent vs. PentestAI",
        "url": "https://www.penligent.ai/hackinglabs/top-ai-pentesting-tools-in-2025-pentestgpt-vs-penligent-vs-pentestai-reviewed/",
        "type": "Article",
        "rating": 8,
        "description": "Comparison of features and automation."
      },
      {
        "title": "PentestGPT: An LLM-empowered Automatic Penetration Testing Tool",
        "url": "https://arxiv.org/abs/2308.06782",
        "type": "Paper",
        "rating": 8,
        "description": "Design and evaluation of autonomous pentesting. arXiv:2308.06782, 2024."
      }
    ],
    "x": 1.8,
    "y": 2,
    "dependencies": [
      "dl_fundamentals"
    ]
  },
  {
    "id": "vuln_detection",
    "title": "Vulnerability Detection",
    "category": "Vulnerability Detection",
    "description": "AI-powered vulnerability scanning, code analysis, and bug detection.",
    "resources": [
      {
        "title": "A Survey of Bugs in AI-Generated Code",
        "url": "https://arxiv.org/abs/2512.05239",
        "type": "Paper",
        "rating": 8,
        "description": "Empirical study on functional and security bugs. arXiv:2512.05239, 2025."
      },
      {
        "title": "Exploring the Role of Generative AI in Enhancing Cybersecurity",
        "url": "https://www.sciencedirect.com/science/article/pii/S2590005625001365",
        "type": "Paper",
        "rating": 8,
        "description": "GenAI for vulnerability detection and secure coding. Computers & Security, 2025."
      },
      {
        "title": "GhidraGPT",
        "url": "https://github.com/ZeroDaysBroker/GhidraGPT",
        "type": "Tool",
        "rating": 8,
        "description": "Integrates GPT models into Ghidra for automated code analysis, vulnerability detection, and explanation generation."
      },
      {
        "title": "Semgrep",
        "url": "https://semgrep.dev/",
        "type": "Tool",
        "rating": 8,
        "description": "AI-assisted SAST combining rules-based scanning with LLM-powered detection for business logic flaws like IDORs."
      },
      {
        "title": "Everything You Wanted to Know About LLM-based Vulnerability Detection",
        "url": "https://arxiv.org/abs/2504.13474",
        "type": "Paper",
        "rating": 8,
        "description": "Context-rich evaluation showing strong LLM performance. arXiv:2504.13474, 2025."
      },
      {
        "title": "GitHub Copilot Security Evaluation",
        "url": "https://cyber.nyu.edu/2021/10/15/ccs-researchers-find-github-copilot-generates-vulnerable-code-40-of-the-time/",
        "type": "Paper",
        "rating": 8,
        "description": "~40% of Copilot-generated code contained vulnerabilities. NYU 2022."
      },
      {
        "title": "LLMs in Software Security: A Survey of Vulnerability Detection Techniques",
        "url": "https://arxiv.org/html/2502.07049v2",
        "type": "Paper",
        "rating": 8,
        "description": "Comprehensive survey on using LLMs for code structure analysis and vulnerability detection. ACM Computing Surveys."
      }
    ],
    "x": 1.8,
    "y": 3,
    "dependencies": [
      "ai_pentesting"
    ]
  },
  {
    "id": "exploit_generation",
    "title": "Exploit Generation",
    "category": "Exploit Generation",
    "description": "AI-assisted exploit development and attack automation techniques.",
    "resources": [
      {
        "title": "LLM Agents can Autonomously Exploit One-day Vulnerabilities",
        "url": "https://arxiv.org/abs/2404.08144",
        "type": "Paper",
        "rating": 8,
        "description": "GPT-4 agents can exploit real CVEs given descriptions. Raises questions about LLM deployment. arXiv:2404.08144, 2024."
      },
      {
        "title": "OWASP Gen AI Incident & Exploit Round-up, Q2'25",
        "url": "https://genai.owasp.org/2025/07/14/owasp-gen-ai-incident-exploit-round-up-q225/",
        "type": "Paper",
        "rating": 8,
        "description": "Tracks exploits targeting/involving GenAI."
      }
    ],
    "x": 1.9440000000000002,
    "y": 4,
    "dependencies": [
      "vuln_detection"
    ]
  },
  {
    "id": "tools_hacking_with_ai",
    "title": "AI Security Tools",
    "category": "Tools - Hacking with AI",
    "description": "Tools that leverage AI for offensive security operations and analysis.",
    "resources": [
      {
        "title": "Hound",
        "url": "https://github.com/scabench-org/hound",
        "type": "Tool",
        "rating": 8,
        "description": "AI auditor that builds adaptive knowledge graphs for deep code reasoning. Uses tiered AI approach for autonomous vulnerability discovery."
      },
      {
        "title": "HackGPT",
        "url": "https://github.com/NoDataFound/hackGPT",
        "type": "Tool",
        "rating": 8,
        "description": "LLM toolkit for offensive security."
      },
      {
        "title": "HackingBuddyGPT",
        "url": "https://github.com/ipa-lab/hackingBuddyGPT",
        "type": "Tool",
        "rating": 8,
        "description": "Autonomous red-teaming agent with benchmarks."
      },
      {
        "title": "GhidrAssist",
        "url": "https://github.com/jtang613/GhidrAssist",
        "type": "Tool",
        "rating": 8,
        "description": "LLM extension for Ghidra with ReAct agentic mode for autonomous reverse engineering investigation."
      },
      {
        "title": "PyRIT (Python Risk Identification Tool)",
        "url": "https://github.com/Azure/PyRIT",
        "type": "Tool",
        "rating": 8,
        "description": "Microsoft red-teaming framework for generative AI. Automates adversarial prompt generation and risk assessment."
      },
      {
        "title": "AI Security Analyzer",
        "url": "https://github.com/xvnpw/ai-security-analyzer",
        "type": "Tool",
        "rating": 8,
        "description": "Generates security docs from codebases."
      },
      {
        "title": "BurpGPT",
        "url": "https://github.com/aress31/burpgpt",
        "type": "Tool",
        "rating": 8,
        "description": "Burp Suite extension for AI-powered vulnerability scanning."
      },
      {
        "title": "CAI: Cybersecurity AI",
        "url": "https://github.com/aliasrobotics/cai",
        "type": "Tool",
        "rating": 8,
        "description": "Framework for building AI-driven security tools by Alias Robotics."
      }
    ],
    "x": 2.088,
    "y": 5,
    "dependencies": [
      "ai_pentesting"
    ]
  },
  {
    "id": "benchmarks_standards",
    "title": "Benchmarks & Standards",
    "category": "Benchmarks & Standards",
    "description": "Industry standards, threat frameworks, and evaluation benchmarks for AI security.",
    "resources": [
      {
        "title": "ScaBench",
        "url": "https://github.com/scabench-org/scabench",
        "type": "Article",
        "rating": 8,
        "description": "Smart contract audit benchmark with 500+ real-world vulnerabilities from Code4rena, Cantina, and Sherlock for evaluating AI audit agents."
      },
      {
        "title": "RobustBench",
        "url": "https://robustbench.github.io/",
        "type": "Article",
        "rating": 8,
        "description": "Leaderboard for adversarial robustness benchmarking."
      },
      {
        "title": "JailbreakBench",
        "url": "https://jailbreakbench.github.io/",
        "type": "Article",
        "rating": 8,
        "description": "Benchmark for LLM jailbreak attacks and defenses."
      },
      {
        "title": "Stanford AIR-Bench 2024",
        "url": "https://crfm.stanford.edu/helm/air-bench/latest/",
        "type": "Article",
        "rating": 8,
        "description": "AI safety benchmark aligned with emerging government regulations and company policies."
      },
      {
        "title": "FLI AI Safety Index 2024",
        "url": "https://futureoflife.org/wp-content/uploads/2024/12/AI-Safety-Index-2024-Full-Report-11-Dec-24.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Future of Life Institute's assessment of AI company safety practices and accountability."
      },
      {
        "title": "MITRE ATLAS",
        "url": "https://atlas.mitre.org/",
        "type": "Article",
        "rating": 8,
        "description": "Adversarial Threat Landscape for AI Systems. Threat matrix documenting real-world attacks on ML (like ATT&CK for AI)."
      },
      {
        "title": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework",
        "type": "Article",
        "rating": 8,
        "description": "Framework for managing AI risks throughout the AI lifecycle."
      }
    ],
    "x": 0,
    "y": 7,
    "dependencies": [
      "tools_hacking_ai",
      "tools_hacking_with_ai"
    ]
  },
  {
    "id": "books",
    "title": "Books",
    "category": "Books",
    "description": "Essential books covering AI security, adversarial ML, and security applications.",
    "resources": [
      {
        "title": "Adversarial Machine Learning (Cambridge)",
        "url": "https://www.cambridge.org/core/books/adversarial-machine-learning/C42A9D49CBC626DF7B8E54E72974AA3B",
        "type": "Book",
        "rating": 8,
        "description": "Complete introduction to building robust ML in adversarial environments. By Joseph, Nelson, Rubinstein, and Tygar."
      },
      {
        "title": "Adversarial Learning and Secure AI (Cambridge, 2023)",
        "url": "https://www.cambridge.org/highereducation/books/adversarial-learning-and-secure-ai/79986B5D288511757C2A95D71262E039",
        "type": "Book",
        "rating": 8,
        "description": "First textbook on adversarial learning. Hands-on projects for defending against attacks."
      },
      {
        "title": "Adversarial Robustness for Machine Learning (Elsevier)",
        "url": "https://www.sciencedirect.com/book/9780128240205/adversarial-robustness-for-machine-learning",
        "type": "Book",
        "rating": 8,
        "description": "Comprehensive coverage of adversarial attack, defense, and verification by Pin-Yu Chen (IBM Research)."
      },
      {
        "title": "Machine Learning and Security",
        "url": "https://www.oreilly.com/library/view/machine-learning-and/9781491979891/",
        "type": "Book",
        "rating": 8,
        "description": "ML in cybersecurity and evasions by Clarence Chio and David Freeman (2018)."
      },
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "url": "https://aima.cs.berkeley.edu/",
        "type": "Book",
        "rating": 8,
        "description": "Broad AI algorithms background by Stuart Russell and Peter Norvig."
      }
    ],
    "x": 0,
    "y": 8,
    "dependencies": []
  },
  {
    "id": "community_events",
    "title": "Communities & Events",
    "category": "Communities & Events",
    "description": "AI security communities, conferences, and events to stay connected.",
    "resources": [
      {
        "title": "OWASP GenAI Security Project",
        "url": "https://genai.owasp.org/",
        "type": "Article",
        "rating": 8,
        "description": "Global initiative for GenAI security including Top 10 for LLMs, Agentic AI risks, and red teaming guides."
      },
      {
        "title": "MLSecOps Podcast",
        "url": "https://mlsecops.com/podcast",
        "type": "Video",
        "rating": 8,
        "description": "ML security discussions and interviews."
      },
      {
        "title": "GenAI Security Podcast",
        "url": "https://podcasts.apple.com/ph/podcast/the-genai-security-podcast/id1782916580",
        "type": "Video",
        "rating": 8,
        "description": "Generative AI security topics and news."
      },
      {
        "title": "AI Vulnerability Database (AVID)",
        "url": "https://avidml.org/",
        "type": "Article",
        "rating": 8,
        "description": "Community database of AI vulnerabilities and incidents."
      }
    ],
    "x": 0,
    "y": 9,
    "dependencies": []
  },
  {
    "id": "newsletters_lists",
    "title": "Newsletters & Lists",
    "category": "Newsletters & Lists",
    "description": "Newsletters and awesome lists to stay current with AI security developments.",
    "resources": [
      {
        "title": "AI Security Newsletter",
        "url": "https://github.com/TalEliyahu/awesome-security-newsletters",
        "type": "Article",
        "rating": 8,
        "description": "Research and threats digest collection."
      },
      {
        "title": "TalEliyahu/Awesome-AI-Security",
        "url": "https://github.com/TalEliyahu/Awesome-AI-Security",
        "type": "Article",
        "rating": 8,
        "description": "Governance and tools focus awesome list."
      },
      {
        "title": "ottosulin/awesome-ai-security",
        "url": "https://github.com/ottosulin/awesome-ai-security",
        "type": "Article",
        "rating": 8,
        "description": "Offensive tools and labs awesome list."
      },
      {
        "title": "ElNiak/awesome-ai-cybersecurity",
        "url": "https://github.com/ElNiak/awesome-ai-cybersecurity",
        "type": "Article",
        "rating": 8,
        "description": "AI in cybersecurity awesome list."
      },
      {
        "title": "corca-ai/awesome-llm-security",
        "url": "https://github.com/corca-ai/awesome-llm-security",
        "type": "Article",
        "rating": 8,
        "description": "LLM-specific security awesome list."
      }
    ],
    "x": 0,
    "y": 10,
    "dependencies": []
  }
];
