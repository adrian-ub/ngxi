import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrystalParaSamsungInternetIcon],svg[arcticons-crystal-para-samsung-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.75 14.25L24 4.5l-9.75 9.75v19.5L24 43.5l9.75-9.75z"></svg:path>`,
})
export class ArcticonsCrystalParaSamsungInternetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
