import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsRUpperCaseIcon],svg[ls-r-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M278 352H174l297 383h-91L83 352H71v383H0V0h278c58 0 110 27 142 71c22 30 34 66 34 105s-12 75-34 104c-32 44-84 72-142 72m3-281H71v209h210c56-1 102-47 102-104c0-56-46-103-102-105"></svg:path>`,
})
export class LsRUpperCaseIcon {
  readonly viewBox = input("0 0 471 735")
  readonly width = input("0.65em")
  readonly height = input("1em")
}
