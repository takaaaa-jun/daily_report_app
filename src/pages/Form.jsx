import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, Clock, MapPin, AlignLeft, Mic } from 'lucide-react';

// 現場名は事前にデータがあるという前提
const MOCK_SITES = [
  '選択してください',
  '渋谷スクランブルスクエア',
  '新宿ミライナタワー',
  '東京ミッドタウン',
  '虎ノ門ヒルズ'
];

// フォームのデータを持った構造
export default function Form({ onAddReport }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    siteName: '',
    startTime: '',
    endTime: '',
    notes: ''
  });

  // フォームの各入力欄が変更されたときに呼ばれる
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // フォームの送信ボタンが押されたときに呼ばれる
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.siteName || formData.siteName === '選択してください' || !formData.startTime || !formData.endTime) return;

    onAddReport(formData);
    navigate('/daily_report_app/daily-reports');
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem 0' }}>
      <Link to="/daily_report_app/home" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> トップへ戻る
      </Link>

      <div className="page-header" style={{ textAlign: 'left' }}>
        <h1 className="page-title" style={{ fontSize: '2rem' }}>日報登録</h1>
        <p className="page-subtitle">本日の業務内容を報告してください</p>
      </div>

      <form onSubmit={handleSubmit} className="glass-panel">
        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={16} /> 現場名
          </label>
          <select
            name="siteName"
            value={formData.siteName}
            onChange={handleChange}
            className="form-input"
            required
            style={{ appearance: 'none', cursor: 'pointer' }}
          >
            {MOCK_SITES.map((site) => (
              <option key={site} value={site === '選択してください' ? '' : site} disabled={site === '選択してください'}>
                {site}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={16} /> 作業時間
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="form-input"
              required
            />
            <span>〜</span>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlignLeft size={16} /> 特記事項
            </span>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ padding: '0.25rem 0.5rem', fontSize: '0.85rem', gap: '0.25rem' }}
              onClick={() => alert('音声入力はモック機能のため現在利用できません。')}
            >
              <Mic size={14} /> 音声入力
            </button>
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-textarea"
            placeholder="本日の作業進捗や、明日の申し送り事項などを入力してください..."
          />
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className="btn">
            <Save size={18} />
            登録して一覧へ
          </button>
        </div>
      </form>
    </div>
  );
}
