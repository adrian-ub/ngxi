import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForUnitedArabEmiratesIcon],svg[emojione-flag-for-united-arab-emirates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M2 32c0 13.1 8.4 24.2 20 28.3V3.7C10.4 7.8 2 18.9 2 32"></svg:path><svg:path fill="#699635" d="M32 2c-3.5 0-6.9.6-10 1.7V22h38.3C56.2 10.4 45.1 2 32 2"></svg:path><svg:path fill="#f9f9f9" d="M60.3 22H22v20h38.3c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10"></svg:path><svg:path fill="#3e4347" d="M22 42v18.3c3.1 1.1 6.5 1.7 10 1.7c13.1 0 24.2-8.3 28.3-20z"></svg:path>`,
})
export class EmojioneFlagForUnitedArabEmiratesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
