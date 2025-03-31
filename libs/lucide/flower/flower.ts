import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFlower],svg[lucide-flower]',
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
    <svg:circle cx="12" cy="12" r="3" />
    <svg:path
      d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
    />
    <svg:path d="M12 7.5V9" />
    <svg:path d="M7.5 12H9" />
    <svg:path d="M16.5 12H15" />
    <svg:path d="M12 16.5V15" />
    <svg:path d="m8 8 1.88 1.88" />
    <svg:path d="M14.12 9.88 16 8" />
    <svg:path d="m8 16 1.88-1.88" />
    <svg:path d="M14.12 14.12 16 16" />
  `,
})
export class LucideFlower {
  readonly class = input('lucide lucide-flower');
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
