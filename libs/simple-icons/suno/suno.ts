import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siSuno],svg[si-suno]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Suno</svg:title>
    <svg:path
      d="M16.5 0C20.642 0 24 5.373 24 12h-9c0 6.627-3.358 12-7.5 12C3.358 24 0 18.627 0 12h9c0-6.627 3.358-12 7.5-12Z"
    />`,
})
export class SiSuno {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
