import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsIUpperCaseIcon],svg[ls-i-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 735V0h72v735z"></svg:path>`,
})
export class LsIUpperCaseIcon {
  readonly viewBox = input("0 0 72 735")
  readonly width = input("0.1em")
  readonly height = input("1em")
}
