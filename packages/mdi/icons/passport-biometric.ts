import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPassportBiometricIcon],svg[mdi-passport-biometric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v5h6.13c.46-1.76 2.05-3 3.87-3a4.01 4.01 0 0 1 3.87 3H22V6a2 2 0 0 0-2-2zm8 6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M2 13v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5h-6.13A4.01 4.01 0 0 1 12 16a4.01 4.01 0 0 1-3.87-3z"></svg:path>`,
})
export class MdiPassportBiometricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
