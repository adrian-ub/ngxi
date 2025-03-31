import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTableCellsMerge],svg[lucide-table-cells-merge]',
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
    <svg:path d="M12 21v-6" />
    <svg:path d="M12 9V3" />
    <svg:path d="M3 15h18" />
    <svg:path d="M3 9h18" />
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
  `,
})
export class LucideTableCellsMerge {
  readonly class = input('lucide lucide-table-cells-merge');
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
