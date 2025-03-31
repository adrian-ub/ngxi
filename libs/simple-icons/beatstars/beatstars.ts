import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siBeatstars],svg[si-beatstars]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>BeatStars</svg:title>
    <svg:path
      d="m17.217 11.996-3.308 1.079v3.478l-2.052-2.818-3.309 1.079 2.043-2.818-2.043-2.819 3.31 1.08 2.05-2.819v3.487zm0 0v7.277H6.854V4.584h10.363v7.412l4.585-1.49v-7.67L19.135 0H2.198v24h16.92l2.684-2.685v-7.83z"
    />`,
})
export class SiBeatstars {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
