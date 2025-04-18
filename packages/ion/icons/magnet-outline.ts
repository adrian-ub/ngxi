import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMagnetOutlineIcon],svg[ion-magnet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 0 0 218.18 90.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M353.94 225.94a48 48 0 0 0-67.88-67.88"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48m-101.82 5.82l33.94-33.94M48 320h48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 0 1-45.25 0L105 248.57a32 32 0 0 1 0-45.26L218.18 90.17m203.65 203.65L308.69 407a32 32 0 0 1-45.26 0l-22.62-22.63a32 32 0 0 1 0-45.26l113.13-113.17M139.6 169.98l67.88 67.89m67.88 67.88l67.89 67.88"></svg:path>`,
})
export class IonMagnetOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
