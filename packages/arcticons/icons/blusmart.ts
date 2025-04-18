import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlusmartIcon],svg[arcticons-blusmart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 4.5c-2.216 0-4 1.784-4 4v31c0 2.216 1.784 4 4 4H29c4.455 0 10.5-4.705 10.5-12a11.96 11.96 0 0 0-4.098-9.041A10.47 10.47 0 0 0 38.5 15c0-4.881-3.34-10.5-9.5-10.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.176 12.846h-9.702l-2.323 10.851h3.615l-2.962 11.458l8.79-12.589H24.01z"></svg:path>`,
})
export class ArcticonsBlusmartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
