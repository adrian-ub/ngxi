import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGrape],svg[lucide-grape]',
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
    <svg:path d="M22 5V2l-5.89 5.89" />
    <svg:circle cx="16.6" cy="15.89" r="3" />
    <svg:circle cx="8.11" cy="7.4" r="3" />
    <svg:circle cx="12.35" cy="11.65" r="3" />
    <svg:circle cx="13.91" cy="5.85" r="3" />
    <svg:circle cx="18.15" cy="10.09" r="3" />
    <svg:circle cx="6.56" cy="13.2" r="3" />
    <svg:circle cx="10.8" cy="17.44" r="3" />
    <svg:circle cx="5" cy="19" r="3" />
  `,
})
export class LucideGrape {
  readonly class = input('lucide lucide-grape');
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
