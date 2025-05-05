import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHelicopterIcon],svg[picon-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v1h1V1m0 4h2q0-2-2-2m1-1q2 0 2 4H3L2 4H0V1l1 1m1 6L1 7h7L7 8M2 1L1 0h7L7 1"></svg:path>`,
})
export class PiconHelicopterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
