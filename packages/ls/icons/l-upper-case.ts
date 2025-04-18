import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsLUpperCaseIcon],svg[ls-l-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71 0v663h383v72H0V0z"></svg:path>`,
})
export class LsLUpperCaseIcon {
  readonly viewBox = input("0 0 454 735")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
