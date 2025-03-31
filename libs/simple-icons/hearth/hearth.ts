import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siHearth],svg[si-hearth]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Hearth</svg:title>
    <svg:path
      d="M8.1958 10.318v9.576L.4531 24v-9.3298zm7.6591-4.162 7.692 4.1616v9.5736L15.8532 24v-9.3302l-7.6577-4.3522ZM8.196 0v9.576L.453 13.8027v-9.648Z"
    />`,
})
export class SiHearth {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
