import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideQrCode],svg[lucide-qr-code]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:rect width="5" height="5" x="3" y="3" rx="1" />
    <svg:rect width="5" height="5" x="16" y="3" rx="1" />
    <svg:rect width="5" height="5" x="3" y="16" rx="1" />
    <svg:path d="M21 16h-3a2 2 0 0 0-2 2v3" />
    <svg:path d="M21 21v.01" />
    <svg:path d="M12 7v3a2 2 0 0 1-2 2H7" />
    <svg:path d="M3 12h.01" />
    <svg:path d="M12 3h.01" />
    <svg:path d="M12 16v.01" />
    <svg:path d="M16 12h1" />
    <svg:path d="M21 12v.01" />
    <svg:path d="M12 21v-1" />
  `,
})
export class LucideQrCode {
  readonly class = input('lucide lucide-qr-code');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
