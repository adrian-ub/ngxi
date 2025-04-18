import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilGridIcon],svg[il-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M301 8q10 0 17 7t6 16v278q0 10-6 17t-17 7H23q-10 0-16-7t-7-17V31q0-9 7-16t16-7zM0 448q0-9 7-16t16-7h278q10 0 17 7t6 16v278q0 10-6 17t-17 7H23q-10 0-16-7t-7-17zM417 31q0-9 7-16t16-7h278q10 0 17 7t6 16v278q0 10-6 17t-17 7H440q-10 0-16-7t-7-17zm23 719q-10 0-16-7t-7-17V448q0-9 7-16t16-7h278q10 0 17 7t6 16v278q0 10-6 17t-17 7z"></svg:path>`,
})
export class IlGridIcon {
  readonly viewBox = input("0 0 750 850")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
