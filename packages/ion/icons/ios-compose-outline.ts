import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosComposeOutlineIcon],svg[ion-ios-compose-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M368 416H80V144h224.117l16-16H64v304h320V191.883l-16 16z" fill="currentColor"></svg:path><svg:path d="M237.623 284.084l-9.706-9.707L399.24 103.054 387.927 91.74 208 271.651V304h32.216l180.045-179.984-11.314-11.286z" fill="currentColor"></svg:path><svg:path d="M444.213 80.312l-12.465-12.466C429.084 65.467 425.556 64 421.746 64a14.758 14.758 0 0 0-9.929 3.85L399.666 80l.08.08 11.293 11.293 21.02 21.02 12.15-12.15c2.383-2.625 3.791-6.117 3.791-9.929 0-3.81-1.408-7.339-3.787-10.002z" fill="currentColor"></svg:path>`,
})
export class IonIosComposeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
