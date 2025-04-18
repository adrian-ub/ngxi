import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRoundrectangleIcon],svg[whh-roundrectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.694 1024h-512q-106 0-181-75t-75-181V256q0-106 75-181t181-75h512q106 0 181 75t75 181v512q0 106-75 181t-181 75m192-768q0-80-56-136t-136-56h-512q-80 0-136 56t-56 136v512q0 80 56 136t136 56h512q80 0 136-56t56-136z"></svg:path>`,
})
export class WhhRoundrectangleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
