import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsYUpperCaseIcon],svg[ls-y-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M262 289L439 0h85L298 368v367h-72V367L0 0h85z"></svg:path>`,
})
export class LsYUpperCaseIcon {
  readonly viewBox = input("0 0 524 735")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
