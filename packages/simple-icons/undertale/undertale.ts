import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siUndertale],svg[si-undertale]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Undertale</svg:title>
    <svg:path
      d="M3 0v1.5H1.5V3H0v12h3v3h3v3h3v3h6v-3h3v-3h3v-3h3V3h-1.5V1.5H21V0h-3v1.5h-3V3h-1.5v3h-3V3H9V1.5H6V0z"
    />`,
})
export class SiUndertale {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
