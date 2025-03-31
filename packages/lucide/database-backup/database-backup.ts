import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDatabaseBackup],svg[lucide-database-backup]',
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
  template: `<svg:ellipse cx="12" cy="5" rx="9" ry="3"></svg:ellipse>
    <svg:path d="M3 12a9 3 0 0 0 5 2.69"></svg:path>
    <svg:path d="M21 9.3V5"></svg:path>
    <svg:path d="M3 5v14a9 3 0 0 0 6.47 2.88"></svg:path>
    <svg:path d="M12 12v4h4"></svg:path>
    <svg:path
      d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"
    ></svg:path>`,
})
export class LucideDatabaseBackup {
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
