import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCheckmarkIcon],svg[whh-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1006 195L387 813q-18 18-53 17q-32-1-49-17L18 546Q0 528 0 502t18-44l89-89q18-18 44-18t44 18l141 141L829 18q18-18 44-18t44 18l89 88q18 19 18 44.5t-18 44.5"></svg:path>`,
})
export class WhhCheckmarkIcon {
  readonly viewBox = input("0 0 1024 830")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
