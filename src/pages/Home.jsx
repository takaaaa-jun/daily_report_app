import { Link } from 'react-router-dom';
import { PenSquare, ClipboardList } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div className="page-header">
        <h1 className="page-title">Daily Report System</h1>
        <p className="page-subtitle">スマートな日報管理アプリ</p>
      </div>

      <div className="glass-panel" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          日々の業務報告をシンプルに。以下のメニューから選択してください。
        </p>

        <div className="flex-center">
          <Link to="/daily_report_app/form" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            <PenSquare size={20} />
            日報を登録する
          </Link>

          <Link to="/daily_report_app/daily-reports" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            <ClipboardList size={20} />
            提出済み日報一覧
          </Link>
        </div>
      </div>
    </div>
  );
}
