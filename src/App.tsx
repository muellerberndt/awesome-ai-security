
import { useState } from 'react';
import { JourneyMap } from './components/JourneyMap';
import { NodeData } from './data/graphData';
import { Star, Github, Home, Sparkles, FlaskConical, BookOpen } from 'lucide-react';

function App() {
    const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

    return (
        <div className="min-h-screen w-screen bg-[var(--bg-primary)] overflow-hidden flex flex-col text-[var(--text-primary)]">

            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-40 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] h-16">
                <div className="mx-auto h-full max-w-7xl px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Home */}
                        <a
                            href="https://floatingpragma.io/"
                            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors text-sm"
                        >
                            <Home className="w-4 h-4" />
                            <span className="hidden sm:inline text-xs font-medium">FP</span>
                        </a>

                        <span className="text-[var(--border-color)]">|</span>

                        {/* Title */}
                        <span className="text-sm font-medium text-[var(--text-secondary)]">
                            Awesome AI Security
                        </span>

                        <span className="hidden sm:inline text-[var(--border-color)]">|</span>

                        {/* ZK Proofs cross-link */}
                        <a
                            href="https://floatingpragma.io/awesome-zk-proofs/"
                            className="hidden sm:flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-purple)] transition-colors"
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span className="text-xs">ZK Proofs</span>
                        </a>

                        {/* OPH cross-link */}
                        <a
                            href="https://floatingpragma.io/oph/"
                            className="hidden sm:flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                        >
                            <FlaskConical className="w-3.5 h-3.5" />
                            <span className="text-xs">OPH</span>
                        </a>

                        {/* StarkLab cross-link */}
                        <a
                            href="https://floatingpragma.io/starklab/"
                            className="hidden sm:flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-purple)] transition-colors"
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span className="text-xs">StarkLab</span>
                        </a>

                        {/* Selected Works cross-link */}
                        <a
                            href="https://floatingpragma.io/selected-works/"
                            className="hidden sm:flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors"
                        >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span className="text-xs">Selected Works</span>
                        </a>
                    </div>

                    {/* GitHub Star */}
                    <a
                        href="https://github.com/muellerberndt/awesome-ai-security"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors text-sm"
                    >
                        <Github className="w-4 h-4" />
                        <Star className="w-3.5 h-3.5 group-hover:fill-[var(--accent-amber)] transition-all" />
                        <span className="hidden sm:inline text-xs">Star</span>
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full relative overflow-y-auto">
                <JourneyMap
                    onNodeSelect={setSelectedNode}
                    selectedNodeId={selectedNode?.id || null}
                />
            </main>
        </div>
    );
}

export default App;
