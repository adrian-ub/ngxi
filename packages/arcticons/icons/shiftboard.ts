import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShiftboardIcon],svg[arcticons-shiftboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.373 11.095a5.151 5.151 0 1 1 9.951 2.666"></svg:path><svg:circle cx="10.651" cy="12.427" r="5.151" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.651" cy="35.209" r="5.151" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.815 36.905a5.15 5.15 0 0 1-6.31 3.643q0 0 0 0a5.15 5.15 0 0 1-3.642-6.31q0 0 0 0m6.51-23.143l-6.51 23.144M42.324 13.76l-6.51 23.145"></svg:path>`,
})
export class ArcticonsShiftboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
