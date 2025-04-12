import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePipetteIcon],svg[lucide-pipette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2 22l1-1h3l9-9M3 21v-3l9-9"></svg:path><svg:path d="m15 6l3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3z"></svg:path></svg:g>`
})
export class LucidePipetteIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
