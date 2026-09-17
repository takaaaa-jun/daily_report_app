import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, MapPin, Calendar } from 'lucide-react';

export default function DailyReports({ reports }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Link to="/daily_report_app/home" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
          <ArrowLeft size={16} /> トップへ戻る
        </Link>

        <Link to="/daily_report_app/form" className="btn" style={{ padding: '0.5rem 1rem' }}>
          新規作成
        </Link>
      </div>

      <div className="page-header" style={{ textAlign: 'left' }}>
        <h1 className="page-title" style={{ fontSize: '2rem' }}>日報一覧</h1>
        <p className="page-subtitle">これまでに提出された日報の履歴</p>
      </div>

      <div className="glass-panel" style={{ padding: '0' }}>
        {/* reportsの要素が一つもない場合 */}
        {reports.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '1rem' }}>まだ提出された日報がありません。</p>
            <Link to="/daily_report_app/form" className="btn btn-secondary">
              最初の日報を登録する
            </Link>
          </div>
        ) : ( // reportsの要素が一つ以上ある場合
          <div>
            {/* reportsの要素を一つずつ取り出して、report-cardに渡す */}
            {reports.map((report) => (
              <div key={report.id} className="report-card">
                <div className="report-header">
                  <h3 className="report-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={18} color="var(--primary)" />
                    {report.siteName}
                  </h3>
                  <span className="badge">
                    <CheckCircle2 size={14} style={{ marginRight: '4px' }} />
                    {report.status}
                  </span>
                </div>

                <div className="report-meta">
                  <div className="report-meta-item">
                    <Clock size={14} />
                    <span>{report.startTime} 〜 {report.endTime}</span>
                  </div>
                  <div className="report-meta-item">
                    <Calendar size={14} />
                    <span>提出日: {formatDate(report.submittedAt)}</span>
                  </div>
                </div>

                {report.notes && (
                  <div className="report-notes">
                    {report.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
