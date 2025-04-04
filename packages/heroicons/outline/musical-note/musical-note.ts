import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroMusicalNoteOutline],svg[hero-musical-note-outline]',
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke]': 'stroke()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.data-slot]': 'dataSlot()',
  },
  template: `<svg:path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
  ></svg:path>`,
})
export class HeroMusicalNoteOutline {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('none');
  readonly viewBox = input('0 0 24 24');
  readonly strokeWidth = input('1.5', { alias: 'stroke-width' });
  readonly stroke = input('currentColor');
  readonly ariaHidden = input('true', { alias: 'aria-hidden' });
  readonly dataSlot = input('icon', { alias: 'data-slot' });
}
