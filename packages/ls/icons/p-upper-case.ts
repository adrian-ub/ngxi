import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPUpperCaseIcon],svg[ls-p-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h279c58 0 109 27 141 71c22 30 35 66 35 105s-13 75-35 104c-32 44-83 72-141 72H72v383H0zm72 280h210c56-1 101-47 101-104c0-56-45-103-101-105H72z"></svg:path>`,
})
export class LsPUpperCaseIcon {
  readonly viewBox = input("0 0 455 735")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
