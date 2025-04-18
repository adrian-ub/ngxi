import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psRewindIcon],svg[ps-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M177 423q6 6 15 6q4 0 9-2q12-3 12-19V271l135 150q6 6 15 6q4 0 8-2q13-3 13-19V24q0-15-13-19q-14-3-23 6L213 161V24q0-15-12-19q-15-3-24 6L6 203q-11 17 0 28zM341 79v271L220 216zm-170 0v271L49 216z"></svg:path>`,
})
export class PsRewindIcon {
  readonly viewBox = input("0 0 384 472")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
