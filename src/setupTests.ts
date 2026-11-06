// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

if (!('IntersectionObserver' in window)) {
	Object.defineProperty(window, 'IntersectionObserver', {
		writable: true,
		value: class {
			constructor(private callback: IntersectionObserverCallback) {}

			observe(target: Element) {
				this.callback([{ isIntersecting: true, target, intersectionRatio: 1 } as IntersectionObserverEntry], this as unknown as IntersectionObserver);
			}

			unobserve() {}
			disconnect() {}
		},
	});
}

// jsdom has neither of these.
window.matchMedia = window.matchMedia || ((query: string) => ({ matches: false, media: query } as MediaQueryList));
window.HTMLMediaElement.prototype.play = () => Promise.resolve();
window.HTMLMediaElement.prototype.pause = () => {};
