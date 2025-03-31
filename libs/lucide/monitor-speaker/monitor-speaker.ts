import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorSpeaker],svg[lucide-monitor-speaker]',
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
    <svg:path d="M5.5 20H8" />
    <svg:path d="M17 9h.01" />
    <svg:rect width="10" height="16" x="12" y="4" rx="2" />
    <svg:path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
    <svg:circle cx="17" cy="15" r="1" />
  `,
})
export class LucideMonitorSpeaker {
  readonly class = input('lucide lucide-monitor-speaker');
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
