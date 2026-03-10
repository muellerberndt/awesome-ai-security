declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

function hasGtag() {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

export function trackPageView(path: string, title: string) {
    if (!hasGtag()) return;

    window.gtag?.('event', 'page_view', {
        page_path: path,
        page_title: title,
        page_location: window.location.href,
    });
}

export function trackEvent(eventName: string, params: Record<string, unknown>) {
    if (!hasGtag()) return;
    window.gtag?.('event', eventName, params);
}

export function installLinkTracking(pageSection: string) {
    if (typeof window === 'undefined') return () => undefined;

    const handleClick = (event: MouseEvent) => {
        if (!hasGtag()) return;
        if (!(event.target instanceof Element)) return;

        const link = event.target.closest('a');
        if (!(link instanceof HTMLAnchorElement) || !link.href) return;
        if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) return;

        const destination = new URL(link.href, window.location.href);
        const isFloatingPragmaSite =
            destination.hostname === 'floatingpragma.io' ||
            destination.hostname.endsWith('.floatingpragma.io');

        const linkText =
            link.dataset.trackLink ||
            link.textContent?.replace(/\s+/g, ' ').trim().slice(0, 96) ||
            destination.hostname;

        window.gtag?.('event', isFloatingPragmaSite ? 'navigation_click' : 'resource_click', {
            page_section: pageSection,
            link_text: linkText,
            link_url: destination.href,
            link_domain: destination.hostname,
            outbound: destination.origin !== window.location.origin,
        });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
}
