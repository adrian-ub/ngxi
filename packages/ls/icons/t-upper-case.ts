import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsTUpperCaseIcon],svg[ls-t-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h455v71H263v664h-71V71H0z"></svg:path>`,
})
export class LsTUpperCaseIcon {
  readonly viewBox = input("0 0 455 735")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
