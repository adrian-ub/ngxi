import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsHUpperCaseIcon],svg[ls-h-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M455 280V0h72v735h-72V352H72v383H0V0h72v280z"></svg:path>`,
})
export class LsHUpperCaseIcon {
  readonly viewBox = input("0 0 527 735")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
