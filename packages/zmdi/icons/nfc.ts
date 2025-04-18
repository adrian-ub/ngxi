import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNfcIcon],svg[zmdi-nfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zm0 384V45H43v342zM341 88v256H85V88h86v43h-43v170h171V131h-64v48q21 12 21 37q0 18-12.5 30.5t-30 12.5t-30-12.5T171 216q0-24 21-37v-48q0-18 12.5-30.5T235 88z"></svg:path>`,
})
export class ZmdiNfcIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
