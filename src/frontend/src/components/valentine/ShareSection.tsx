import { useCopyToClipboard } from './hooks/useCopyToClipboard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Check, Share2 } from 'lucide-react';

export function ShareSection() {
  const { copied, copyToClipboard } = useCopyToClipboard();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = () => {
    copyToClipboard(currentUrl);
  };

  return (
    <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-pink-200 dark:border-pink-800 shadow-romantic">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Share2 className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Share this link
          </h3>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-3 border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-700 dark:text-gray-300 break-all font-mono">
              {currentUrl}
            </p>
          </div>
          
          <Button
            onClick={handleCopy}
            className="bg-pink-600 hover:bg-pink-700 text-white shrink-0"
            disabled={copied}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy link
              </>
            )}
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
          Share this link with someone special to send them this romantic surprise
        </p>
      </CardContent>
    </Card>
  );
}
