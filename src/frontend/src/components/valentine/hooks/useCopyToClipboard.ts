import { useState, useCallback } from 'react';

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setError(null);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        textArea.remove();
        
        if (successful) {
          setCopied(true);
          setError(null);
        } else {
          throw new Error('Copy command failed');
        }
      }

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy');
      setCopied(false);
      setTimeout(() => setError(null), 2000);
    }
  }, []);

  return { copied, error, copyToClipboard };
}
