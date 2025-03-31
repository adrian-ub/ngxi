import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAudioLines],svg[lucide-audio-lines]',
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
    <svg:path d="M2 10v3" />
    <svg:path d="M6 6v11" />
    <svg:path d="M10 3v18" />
    <svg:path d="M14 8v7" />
    <svg:path d="M18 5v13" />
    <svg:path d="M22 10v3" />
  `,
})
export class LucideAudioLines {
  readonly class = input('lucide lucide-audio-lines');
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
