import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScanQrCode],svg[lucide-scan-qr-code]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `<svg:path d="M17 12v4a1 1 0 0 1-1 1h-4"></svg:path>
    <svg:path d="M17 3h2a2 2 0 0 1 2 2v2"></svg:path>
    <svg:path d="M17 8V7"></svg:path>
    <svg:path d="M21 17v2a2 2 0 0 1-2 2h-2"></svg:path>
    <svg:path d="M3 7V5a2 2 0 0 1 2-2h2"></svg:path>
    <svg:path d="M7 17h.01"></svg:path>
    <svg:path d="M7 21H5a2 2 0 0 1-2-2v-2"></svg:path>
    <svg:rect x="7" y="7" width="5" height="5" rx="1"></svg:rect>`,
})
export class LucideScanQrCode {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
