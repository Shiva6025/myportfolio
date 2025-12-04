'use client';

export default function FloatingShapes() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

            <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 20s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
}
