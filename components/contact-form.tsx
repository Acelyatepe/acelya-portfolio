'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { siteConfig } from '@/data/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function submit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    if (String(form.get('website') || '')) return; // gizli alan dolduysa bu bir robottur
    setStatus('sending');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: String(form.get('name') || ''),
          email: String(form.get('email') || ''),
          message: String(form.get('message') || ''),
          _subject: `Portfolyo: ${String(form.get('subject') || 'Yeni mesaj')}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const result = (await response.json().catch(() => ({}))) as { success?: unknown };
      if (!response.ok || String(result.success) === 'false') throw new Error('send failed');
      formElement.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="field-row">
      <div className="field"><label htmlFor="name">Adınız</label><input id="name" name="name" autoComplete="name" required placeholder="Adınızı yazın"/></div>
      <div className="field"><label htmlFor="email">E-posta</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="ornek@eposta.com"/></div>
    </div>
    <div className="field"><label htmlFor="subject">Konu</label><input id="subject" name="subject" required placeholder="Mesajınızın konusu"/></div>
    <div className="field"><label htmlFor="message">Mesaj</label><textarea id="message" name="message" rows={6} required placeholder="Projenizden veya fikrinizden bahsedin"/></div>
    <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0 }}/>
    <button className="button button-dark" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Gönderiliyor…' : 'Mesajı gönder'} <Send size={17}/></button>
    <div aria-live="polite">
      {status === 'success' && <p className="form-status form-success">Mesajınız bana ulaştı, teşekkürler! En kısa sürede e-posta ile dönüş yapacağım.</p>}
      {status === 'error' && <p className="form-status form-error">Mesaj gönderilemedi. Lütfen tekrar deneyin ya da e-posta ile yazın: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>}
      {status !== 'success' && status !== 'error' && <p className="form-hint">Mesajınız doğrudan e-posta kutuma iletilir.</p>}
    </div>
  </form>;
}
