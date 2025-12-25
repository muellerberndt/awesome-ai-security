
import { useState } from 'react';
import { JourneyMap } from './components/JourneyMap';
import { NodeData } from './data/graphData';
import { Star, Github } from 'lucide-react';

function App() {
    const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

    return (
        <div className="min-h-screen w-screen bg-[var(--bg-primary)] overflow-hidden flex flex-col text-[var(--text-primary)]">

            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-40 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] h-16">
                <div className="mx-auto h-full max-w-7xl px-6 flex items-center justify-between">
                    {/* Title */}
                    <span className="text-sm font-medium text-[var(--text-secondary)]">
                        Awesome AI Security
                    </span>

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
