import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilEnvelopeIcon],svg[il-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M348 250q22 6 45 0l348-87v371q0 10-6 16t-17 7H23q-10 0-16-7t-7-16V163zM718 1q10 0 17 6t6 17v70l-348 87q-23 5-45 0L0 94V24Q0 14 7 7t16-6z"></svg:path>`,
})
export class IlEnvelopeIcon {
  readonly viewBox = input("0 0 750 750")
  readonly width = input("1em")
  readonly height = input("1em")
}
