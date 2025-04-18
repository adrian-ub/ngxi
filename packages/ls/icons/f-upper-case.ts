import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsFUpperCaseIcon],svg[ls-f-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M455 0v71H72v209h383v72H72v383H0V0z"></svg:path>`,
})
export class LsFUpperCaseIcon {
  readonly viewBox = input("0 0 455 735")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
