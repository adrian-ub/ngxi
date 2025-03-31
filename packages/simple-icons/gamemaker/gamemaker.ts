import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siGamemaker],svg[si-gamemaker]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Gamemaker</svg:title>
    <svg:path
      d="M.012 11.994 12.006 0l11.982 12.006h-6.831l-5.163-5.151-5.151 5.151 5.163 5.151v-5.151h5.151v6.903L12.006 24z"
    />`,
})
export class SiGamemaker {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
