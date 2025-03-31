import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siBurpsuite],svg[si-burpsuite]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Burp Suite</svg:title>
    <svg:path
      d="M0 0v24h24V0Zm11.063 3.357h1.874v2.756L10.41 9.2h2.527v3.748h4.579l-4.578 5.592v2.104h-1.876v-2.758l2.528-3.086h-2.527V11.05h-4.58l4.58-5.592Z"
    />`,
})
export class SiBurpsuite {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}
