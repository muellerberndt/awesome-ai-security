# Awesome AI Security

[![Interactive version](https://img.shields.io/badge/Interactive%20version-floatingpragma.io-a855f7?style=for-the-badge)](https://floatingpragma.io/awesome-ai-security/)
[![Awesome ZK Proofs](https://img.shields.io/badge/Also%20see-Awesome%20ZK%20Proofs-38d4f5?style=for-the-badge)](https://floatingpragma.io/awesome-zk-proofs/)

> **[Browse the interactive version](https://floatingpragma.io/awesome-ai-security/)** — the same list as a
> learning path with two tracks, a filter, and a link for every topic.

A curated, annotated list of resources for AI security: prompt injection, adversarial machine
learning, model privacy, AI red teaming, and using AI for offensive and defensive security work.

## Contributing

**This README is generated. Edits to it are overwritten on the next build.**

Add your resource to [`src/data/raw_resources.json`](src/data/raw_resources.json) with a `title`,
`url`, one-sentence `description` and a `category`, then run:

```bash
node scripts/map_data.cjs && node scripts/layout_pyramid.cjs && npm run awesome
```

Commit the regenerated `README.md`, `nodes.json` and `graphData.ts` along with your change. A pull
request that touches only `README.md` cannot reach the website, which is built from the same source
data. See [CONTRIBUTION.md](CONTRIBUTION.md).

<!-- AWESOME_LIST:START -->

### ML Foundations
Essential machine learning concepts and courses to build a foundation before diving into AI security.

- [Stanford CS229: Machine Learning](https://cs229.stanford.edu/) - Stanford's foundational ML course covering supervised learning, deep learning, generalization, and unsupervised learning. Taught by leaders in the field.
- [fast.ai Practical Deep Learning for Coders](https://course.fast.ai/) - Free, top-down approach to deep learning with PyTorch. Covers computer vision, NLP, and tabular data with hands-on Jupyter notebooks.
- [Deep Learning Specialization by Andrew Ng](https://www.coursera.org/specializations/deep-learning) - A fantastic 5-course series on neural networks and deep learning fundamentals—beginner-friendly and taught by AI pioneer Andrew Ng. Auditable for free.

### Deep Learning
Deep dive into neural networks, transformers, and the architectures behind modern AI systems.

- [Dive into Deep Learning](https://d2l.ai/) - Interactive deep learning book with code (PyTorch, JAX, TensorFlow), math, and exercises. Adopted at 500+ universities including Stanford, MIT, Harvard.
- [Neural Networks and Deep Learning (Michael Nielsen)](http://neuralnetworksanddeeplearning.com/) - Free online book explaining the core concepts behind neural networks with excellent intuition and interactive visualizations.
- [Deep Learning by Ian Goodfellow, Yoshua Bengio, Aaron Courville](https://www.deeplearningbook.org/) - The go-to textbook for deep learning theory and math. Freely available online.

### Prompt Injection
Understand prompt injection attacks that manipulate LLM behavior through crafted inputs.

- [Prompt Injection & the Rise of Prompt Attacks: All You Need to Know](https://www.lakera.ai/blog/guide-to-prompt-injection) - Explains prompt injection threats, examples, and mitigations.
- [OpenAI Says AI Browsers May Always Be Vulnerable to Prompt Injection Attacks](https://techcrunch.com/2025/12/22/openai-says-ai-browsers-may-always-be-vulnerable-to-prompt-injection-attacks/) - Discusses ongoing risks and hardening efforts for agentic AI like Atlas.
- [Prompt Injection Attacks in 2025: Risks, Defenses & Testing](https://redbotsecurity.com/prompt-injection-attacks-ai-security-2025/) - Mainstream risks and testing strategies for prompt injections.
- [Prompt Injection Attacks: The Most Common AI Exploit in 2025](https://www.obsidiansecurity.com/blog/prompt-injection) - Detection, blocking, and mitigation for growing prompt injection threats.
- [LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) - Updated risk overview for manipulating model behavior. OWASP Gen AI Security Project, 2025.
- [Rebuff](https://github.com/protectai/rebuff) - Self-hardening prompt injection detector by ProtectAI.
- [Garak](https://github.com/NVIDIA/garak) - NVIDIA's LLM vulnerability scanner with dozens of plugins testing for jailbreaks, prompt injection, data leakage, and more.
- [Vigil LLM](https://github.com/deadbits/vigil-llm) - Detects prompt injections and risky inputs.
- [EasyJailbreak](https://github.com/EasyJailbreak/EasyJailbreak) - Framework for adversarial jailbreak prompts.
- [Prompt Shield](https://github.com/mthamil107/prompt-shield) - Open-source prompt injection detection engine with 27 detectors and cross-domain techniques from bioinformatics and forensic linguistics.
- [Agent Browser Shield](https://github.com/pixiebrix/agent-browser-shield) - Browser extension that strips prompt injection (hidden text and HTML comments) from web pages before an AI agent's model sees them; also masks PII and removes dark patterns.
- [AI Village @ DEF CON](https://aivillage.org/) - Challenges like LLM Jailbreak and AI security research.
- [Red Teaming Language Models to Reduce Harms](https://arxiv.org/abs/2209.07858) - Systematic red teaming findings and public dataset. Anthropic, arXiv:2209.07858, 2022.
- [OWASP Top 10 for LLM Applications 2025](https://owasp.org/www-project-top-10-for-large-language-model-applications/) - Critical risks including prompt injection, sensitive info disclosure, supply chain, and data poisoning.
- [JailbreakBench](https://jailbreakbench.github.io/) - Benchmark for LLM jailbreak attacks and defenses.
- [LLM Security Papers (chawins/llm-sp)](https://github.com/chawins/llm-sp) - Papers and resources on LLM security and privacy including indirect prompt injection research.
- [Armorer Guard](https://github.com/ArmorerLabs/Armorer-Guard) - SDKs and integration contracts for a guard that screens AI-agent tool calls for prompt injection, credential leakage and exfiltration before execution.
- [hego.red](https://hego.red/) - Hands-on notes on LLM red teaming: prompt injection, jailbreaks, indirect injection, RAG and agent testing, with a scoping methodology and worked labs.
- [Koma](https://github.com/swnotmetal/Project-Koma) - Zero-dependency Node.js and TypeScript library that filters prompt injection, audio hallucinations and RAG scraping at the application boundary.
- [Sentinel Scan CLI](https://github.com/Ventrova/sentinel-scan-cli) - CLI and MCP server that scans MCP manifests for tool poisoning and rug-pulls, and runs a prompt injection and jailbreak suite against your own LLM endpoint.
- [RansomLeak AI Security Training](https://ransomleak.com/catalogue/ai-security/) - Browser-based labs on prompt injection, jailbreaking and LLM attack scenarios, mapped to the OWASP Top 10 for LLM and agentic AI. Commercial training.
- [Skill-audit](https://github.com/AgentPostmortem/Skill-audit) - Scanner for agent skills that flags prompt injection, dangerous shell use and secret access before installation. 31 rules, SARIF output, zero dependencies.

### Adversarial Attacks
Learn how adversarial examples fool neural networks and methods to defend against them.

- [A Brief Introduction to Adversarial Examples](https://gradientscience.org/intro_adversarial/) - High-level overview of adversarial examples fooling neural networks by Madry and Schmidt.
- [Key Concepts in AI Safety: Robustness and Adversarial Examples](https://cset.georgetown.edu/publication/key-concepts-in-ai-safety-robustness-and-adversarial-examples/) - Places adversarial robustness in AI safety context.
- [A Meta-Survey of Adversarial Attacks Against Artificial Intelligence Systems](https://www.sciencedirect.com/science/article/pii/S0925231225019034) - Umbrella review of attacks on DNNs. Neurocomputing, 2025.
- [Adversarial Attacks and Defenses in AI Systems: Challenges, Strategies, and Future Directions](https://rsisinternational.org/journals/ijrias/articles/adversarial-attacks-and-defenses-in-ai-systems-challenges-strategies-and-future-directions/) - Comprehensive review of attacks and defenses. RSIS International, 2025.
- [A Survey of Adversarial Examples in Computer Vision](https://wujns.edpsciences.org/articles/wujns/full_html/2025/01/wujns-1007-1202-2025-01-0001-20/wujns-1007-1202-2025-01-0001-20.html) - Attack algorithms and defenses for vision models. 2025.
- [Adversarial Robustness Toolbox (ART)](https://github.com/Trusted-AI/adversarial-robustness-toolbox) - IBM library for attacks and defenses for ML security.
- [TextAttack](https://github.com/QData/TextAttack) - Library for adversarial attacks on NLP models.
- [NIST Adversarial ML Taxonomy](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf) - Standardized terminology and mitigations. NIST IR 100-2, 2025.
- [ACL 2024 Tutorial: Vulnerabilities of LLMs to Adversarial Attacks](https://llm-vulnerability.github.io/) - Comprehensive overview of vulnerabilities in unimodal and multimodal LLMs from NLP and cybersecurity perspectives.

### Poisoning & Backdoors
Data poisoning attacks and neural network backdoors that compromise model integrity.

- [Witches' Brew: Industrial Scale Data Poisoning via Gradient Matching](https://arxiv.org/abs/2009.02276) - Clean-label poisoning at scale. arXiv:2009.02276, 2021.
- [Instruction Backdoor Attacks on Customized LLMs](https://arxiv.org/abs/2402.09179) - Prompt-based backdoors in custom LLMs without weight modification. arXiv:2402.09179, 2024.
- [Poisoning Attacks Need Only a Few Points](https://arxiv.org/abs/2510.07192) - Constant-size poisoning effective even on web-scale models. arXiv:2510.07192, 2025.
- [MNTD: Detecting AI Trojans Using Meta Neural Analysis](https://arxiv.org/abs/1910.03137) - Black-box Trojan detection with high AUC. arXiv:1910.03137, 2021.
- [Beatrix: Robust Backdoor Detection via Gram Matrices](https://www.ndss-symposium.org/wp-content/uploads/2024/09/2023-69-slides.pdf) - Activation-based detection effective against advanced backdoors. NDSS 2024.

### Privacy & Extraction
Model extraction, membership inference, and training data extraction attacks.

- [Extracting Training Data from Large Language Models](https://www.usenix.org/conference/usenixsecurity21/presentation/carlini-extracting) - Privacy attacks via memorization. USENIX Security 2021.
- [Model Leeching: An Extraction Attack Targeting LLMs](https://arxiv.org/abs/2309.10544) - Practical model stealing from GPT-3.5 via API queries. arXiv:2309.10544, 2023.
- [A Watermark for Large Language Models](https://arxiv.org/abs/2301.10226) - Statistical watermarking for detecting AI-generated text. arXiv:2301.10226, 2023.
- [Membership Inference Attacks on Machine Learning: A Survey](https://arxiv.org/abs/2103.07853) - First comprehensive survey on MIAs with taxonomies for attacks and defenses. ACM Computing Surveys.
- [A Survey of Privacy Attacks in Machine Learning](https://dl.acm.org/doi/10.1145/3624010) - Covers membership inference, reconstruction, and model extraction attacks. ACM Computing Surveys.
- [Membership Inference Attacks on Large-Scale Models: A Survey](https://arxiv.org/abs/2503.19338) - MIAs targeting LLMs and LMMs across pre-training, fine-tuning, and RAG. arXiv:2503.19338, 2025.
- [TrustLLM Benchmark](https://trustllmbenchmark.github.io/TrustLLM-Website/) - Comprehensive trustworthiness benchmark spanning truthfulness, safety, fairness, robustness, privacy, and ethics.
- [awesome-ml-privacy-attacks](https://github.com/stratosphereips/awesome-ml-privacy-attacks) - Curated list of 100+ papers on privacy attacks against machine learning.
- [SecuredAI](https://securedai.com/) - Client-side prompt DLP for privacy: detects and masks PII and PHI before a prompt reaches the model, then restores the originals locally. Commercial.

### Tools & Frameworks
Security tools for testing and defending AI systems against adversarial attacks.

- [APort](https://aport.io) - AI agent identity verification and policy enforcement for autonomous systems.
- [Counterfit](https://github.com/Azure/counterfit) - Microsoft penetration testing tool for ML systems.
- [Whistleblower](https://github.com/Repello-AI/whistleblower) - Repello AI's offensive tool for testing LLM applications against system prompt leakage attacks.
- [NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails) - NVIDIA programmable guardrails for LLM safety and security.
- [SecML](https://secml.readthedocs.io/) - Secure and explainable ML library with attacks and defenses.
- [Purple Llama (Meta)](https://github.com/meta-llama/PurpleLlama) - Open-source LLM safety tools including Llama Guard, Prompt Guard, Code Shield, and CyberSec Eval benchmarks.
- [Agent-Wiz](https://github.com/Repello-AI/Agent-Wiz) - CLI that extracts agent workflows from LangChain, LangGraph, CrewAI and AutoGen and runs threat modeling over the resulting graphs.
- [ai-evaluation](https://github.com/future-agi/ai-evaluation) - LLM evaluation framework with 50+ metrics, LLM-as-judge and guardrail scanners covering injection, PII and unsafe-output checks.
- [SkilLock](https://github.com/skills-lock/skil-lock) - Behavior-pinning lockfile and capability-delta review for agent skills; blocks unapproved drift in shell, network and file access in CI with SARIF output.
- [Nika](https://github.com/supernovae-st/nika) - Rust workflow engine for AI runs with hash-chained execution traces, default-deny allowlists for shell, network, file and tool access, and static secret-flow analysis.
- [SourceryKit](https://github.com/ProvablyAI/sourcerykit) - Python SDK that checks an agent's tool calls and MCP handoffs against a trusted-endpoint allowlist and records the provenance of each answer.
- [AI Security Registry](https://forefy.com/asr) - Registry of skills, goals and workflows for AI agents, with git-pinned versions reviewed before each update.
- [sofagent](https://github.com/KongFangXun/sofagent) - Harness for governing AI coding agents: commit-time audit rules over git diffs, an HMAC-signed audit trail and snapshot rollback, exposed as an MCP toolset.
- [Bifrost](https://github.com/maximhq/bifrost) - AI gateway unifying access to model providers and MCP servers, with guardrails, approvals, audit logs and access control at the edge.
- [KeyDrift](https://keydrift.dev) - Scans deployed HTML and JavaScript for secrets that AI-generated code inlines into the client bundle, separating public browser credentials from real leaks.
- [AgentShield](https://github.com/elliotllliu/agent-shield) - Scanner for MCP servers, agent skills and plugins that runs thirteen engines over a package and returns one report. Runs offline via npx with no install.
- [SpecLock](https://github.com/sgroy10/speclock) - Enforces the constraints written in CLAUDE.md, AGENTS.md and .cursorrules before an AI coding agent edits a file, runs a shell command or commits, with an override audit trail and an MCP server.
- [rust-norion](https://github.com/yanghao1143/rust-norion) - Rust control layer for local LLM agents with writer and evidence gates, memory and replay governance, and rollback, so agent self-modification stays inspectable and reversible.
- [crosscheck skillcheck](https://github.com/maxugc/crosscheck) - Paid API and hosted MCP server that security-reviews an agent skill or MCP server before install: code rules for credential theft, exfiltration, pipe-to-shell and lookalike packages, plus a model review, returned with a signed receipt.

### AI Pentesting
Using AI assistants and agents for automated penetration testing and security assessments.

- [PentestGPT](https://github.com/GreyDGL/PentestGPT) - GPT-4 powered autonomous penetration testing agent. Published at USENIX Security 2024.
- [Top 10 AI Pentesting Tools (2025)](https://mindgard.ai/blog/top-ai-pentesting-tools) - Highlights tools like Mindgard, Burp Suite, and PentestGPT.
- [Best AI Pentesting Tools in 2026](https://escape.tech/blog/best-ai-pentesting-tools/) - Focus on detecting business logic flaws.
- [9 AI Enabled Cybersecurity Tools in 2025](https://www.packetlabs.net/posts/9-ai-enabled-cybersecurity-tools-in-2025/) - Includes PenTest++ and CIPHER for ethical hacking.
- [Top AI Pentesting Tools in 2025: PentestGPT vs. Penligent vs. PentestAI](https://www.penligent.ai/hackinglabs/top-ai-pentesting-tools-in-2025-pentestgpt-vs-penligent-vs-pentestai-reviewed/) - Comparison of features and automation.
- [PentestGPT: An LLM-empowered Automatic Penetration Testing Tool](https://arxiv.org/abs/2308.06782) - Design and evaluation of autonomous pentesting. arXiv:2308.06782, 2024.
- [Darkmoon](https://github.com/ASCIT31/Dark-Moon) - Open-source autonomous pentest platform with specialist agents for web, API, Active Directory, Kubernetes, IoT and LLM/MCP endpoints. Runs against a local model and proves each finding with a reproduction.

### Vulnerability Detection
AI-powered vulnerability scanning, code analysis, and bug detection.

- [AI Coding Tools Exploded in 2025: The First Security Exploits Followed](https://fortune.com/2025/12/15/ai-coding-tools-security-exploit-software/) - Discusses vulnerabilities in AI-generated code.
- [A Survey of Bugs in AI-Generated Code](https://arxiv.org/abs/2512.05239) - Empirical study on functional and security bugs. arXiv:2512.05239, 2025.
- [Exploring the Role of Generative AI in Enhancing Cybersecurity](https://www.sciencedirect.com/science/article/pii/S2590005625001365) - GenAI for vulnerability detection and secure coding. Computers & Security, 2025.
- [GhidraGPT](https://github.com/ZeroDaysBroker/GhidraGPT) - Integrates GPT models into Ghidra for automated code analysis, vulnerability detection, and explanation generation.
- [Semgrep](https://semgrep.dev/) - AI-assisted SAST combining rules-based scanning with LLM-powered detection for business logic flaws like IDORs.
- [Everything You Wanted to Know About LLM-based Vulnerability Detection](https://arxiv.org/abs/2504.13474) - Context-rich evaluation showing strong LLM performance. arXiv:2504.13474, 2025.
- [GitHub Copilot Security Evaluation](https://cyber.nyu.edu/2021/10/15/ccs-researchers-find-github-copilot-generates-vulnerable-code-40-of-the-time/) - ~40% of Copilot-generated code contained vulnerabilities. NYU 2022.
- [LLMs in Software Security: A Survey of Vulnerability Detection Techniques](https://arxiv.org/html/2502.07049v2) - Comprehensive survey on using LLMs for code structure analysis and vulnerability detection. ACM Computing Surveys.

### Exploit Generation
AI-assisted exploit development and attack automation techniques.

- [LLM Agents can Autonomously Exploit One-day Vulnerabilities](https://arxiv.org/abs/2404.08144) - GPT-4 agents can exploit real CVEs given descriptions. Raises questions about LLM deployment. arXiv:2404.08144, 2024.
- [AI Agent Exploit Generation in Smart Contracts](https://www.emergentmind.com/topics/ai-agent-smart-contract-exploit-generation) - Autonomous exploit generation using LLMs.
- [OWASP Gen AI Incident & Exploit Round-up, Q2'25](https://genai.owasp.org/2025/07/14/owasp-gen-ai-incident-exploit-round-up-q225/) - Tracks exploits targeting/involving GenAI.
- [AI-Powered Attack Automation: When Machine Learning Writes the Exploit Code](https://medium.com/@instatunnel/wwai-powered-attack-automation-when-machine-learning-writes-the-exploit-code-9eb00af91a51) - Projections on AI-driven cyberattacks.

### AI Security Tools
Tools that leverage AI for offensive security operations and analysis.

- [Hound](https://github.com/scabench-org/hound) - AI auditor that builds adaptive knowledge graphs for deep code reasoning. Uses tiered AI approach for autonomous vulnerability discovery.
- [HackGPT](https://github.com/NoDataFound/hackGPT) - LLM toolkit for offensive security.
- [HackingBuddyGPT](https://github.com/ipa-lab/hackingBuddyGPT) - Autonomous red-teaming agent with benchmarks.
- [GhidrAssist](https://github.com/jtang613/GhidrAssist) - LLM extension for Ghidra with ReAct agentic mode for autonomous reverse engineering investigation.
- [PyRIT (Python Risk Identification Tool)](https://github.com/Azure/PyRIT) - Microsoft red-teaming framework for generative AI. Automates adversarial prompt generation and risk assessment.
- [AI Security Analyzer](https://github.com/xvnpw/ai-security-analyzer) - Generates security docs from codebases.
- [BurpGPT](https://github.com/aress31/burpgpt) - Burp Suite extension for AI-powered vulnerability scanning.
- [CAI: Cybersecurity AI](https://github.com/aliasrobotics/cai) - Framework for building AI-driven security tools by Alias Robotics.

### Benchmarks & Standards
Industry standards, threat frameworks, and evaluation benchmarks for AI security.

- [ScaBench](https://github.com/scabench-org/scabench) - Smart contract audit benchmark with 500+ real-world vulnerabilities from Code4rena, Cantina, and Sherlock for evaluating AI audit agents.
- [International AI Safety Report 2025](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2025) - Summarizes evidence on general-purpose AI safety, including robustness.
- [RobustBench](https://robustbench.github.io/) - Leaderboard for adversarial robustness benchmarking.
- [Stanford AIR-Bench 2024](https://crfm.stanford.edu/helm/air-bench/latest/) - AI safety benchmark aligned with emerging government regulations and company policies.
- [FLI AI Safety Index 2024](https://futureoflife.org/wp-content/uploads/2024/12/AI-Safety-Index-2024-Full-Report-11-Dec-24.pdf) - Future of Life Institute's assessment of AI company safety practices and accountability.
- [MITRE ATLAS](https://atlas.mitre.org/) - Adversarial Threat Landscape for AI Systems. Threat matrix documenting real-world attacks on ML (like ATT&CK for AI).
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) - Framework for managing AI risks throughout the AI lifecycle.
- [Agent Threat Rules (ATR)](https://github.com/Agent-Threat-Rule/agent-threat-rules) - Open detection-rule standard for AI agent threats across ten categories, with MITRE ATLAS and OWASP crosswalks. Sigma-style executable rules, MIT-licensed.

### Books
Essential books covering AI security, adversarial ML, and security applications.

- [Adversarial Machine Learning (Cambridge)](https://www.cambridge.org/core/books/adversarial-machine-learning/C42A9D49CBC626DF7B8E54E72974AA3B) - Complete introduction to building robust ML in adversarial environments. By Joseph, Nelson, Rubinstein, and Tygar.
- [Adversarial Learning and Secure AI (Cambridge, 2023)](https://www.cambridge.org/highereducation/books/adversarial-learning-and-secure-ai/79986B5D288511757C2A95D71262E039) - First textbook on adversarial learning. Hands-on projects for defending against attacks.
- [Adversarial Robustness for Machine Learning (Elsevier)](https://www.sciencedirect.com/book/9780128240205/adversarial-robustness-for-machine-learning) - Comprehensive coverage of adversarial attack, defense, and verification by Pin-Yu Chen (IBM Research).
- [Machine Learning and Security](https://www.oreilly.com/library/view/machine-learning-and/9781491979891/) - ML in cybersecurity and evasions by Clarence Chio and David Freeman (2018).
- [Artificial Intelligence: A Modern Approach](https://aima.cs.berkeley.edu/) - Broad AI algorithms background by Stuart Russell and Peter Norvig.

### Communities & Events
AI security communities, conferences, and events to stay connected.

- [OWASP GenAI Security Project](https://genai.owasp.org/) - Global initiative for GenAI security including Top 10 for LLMs, Agentic AI risks, and red teaming guides.
- [MLSecOps Podcast](https://mlsecops.com/podcast) - ML security discussions and interviews.
- [GenAI Security Podcast](https://podcasts.apple.com/ph/podcast/the-genai-security-podcast/id1782916580) - Generative AI security topics and news.
- [AI Vulnerability Database (AVID)](https://avidml.org/) - Community database of AI vulnerabilities and incidents.

### Newsletters & Lists
Newsletters and awesome lists to stay current with AI security developments.

- [AI Security Newsletter](https://github.com/TalEliyahu/awesome-security-newsletters) - Research and threats digest collection.
- [TalEliyahu/Awesome-AI-Security](https://github.com/TalEliyahu/Awesome-AI-Security) - Governance and tools focus awesome list.
- [ottosulin/awesome-ai-security](https://github.com/ottosulin/awesome-ai-security) - Offensive tools and labs awesome list.
- [ElNiak/awesome-ai-cybersecurity](https://github.com/ElNiak/awesome-ai-cybersecurity) - AI in cybersecurity awesome list.
- [corca-ai/awesome-llm-security](https://github.com/corca-ai/awesome-llm-security) - LLM-specific security awesome list.

<!-- AWESOME_LIST:END -->

---

© [muellerberndt](https://twitter.com/muellerberndt) · [GitHub](https://github.com/muellerberndt)
