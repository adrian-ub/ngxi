import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBotMessageSquare],svg[lucide-bot-message-square]',
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
  template: `<svg:path d="M12 6V2H8"></svg:path>
    <svg:path
      d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
    ></svg:path>
    <svg:path d="M2 12h2"></svg:path>
    <svg:path d="M9 11v2"></svg:path>
    <svg:path d="M15 11v2"></svg:path>
    <svg:path d="M20 12h2"></svg:path>`,
})
export class LucideBotMessageSquare {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
