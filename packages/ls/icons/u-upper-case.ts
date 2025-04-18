import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsUUpperCaseIcon],svg[ls-u-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M527 0v491c0 71-28 134-72 181c-48 51-115 82-191 82s-144-31-192-82C28 625 0 561 0 491V0h72v492c1 105 87 191 192 191s190-86 191-190V0z"></svg:path>`,
})
export class LsUUpperCaseIcon {
  readonly viewBox = input("0 0 527 754")
  readonly width = input("0.7em")
  readonly height = input("1em")
}
