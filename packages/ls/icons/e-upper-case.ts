import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsEUpperCaseIcon],svg[ls-e-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M455 0v71H72v209h383v72H72v311h383v72H0V0z"></svg:path>`,
})
export class LsEUpperCaseIcon {
  readonly viewBox = input("0 0 455 735")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
