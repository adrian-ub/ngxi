import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShiftcalIcon],svg[arcticons-shiftcal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" d="M5.5 13.136h37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.36 16.518h5.16v5.16H9.36zm0 7.997h5.16v5.16H9.36zm0 7.997h5.16v5.16H9.36zm24.12-15.994h5.16v5.16h-5.16zm0 7.997h5.16v5.16h-5.16zm0 7.997h5.16v5.16h-5.16zm-8.04-15.994h5.16v5.16h-5.16zm0 7.997h5.16v5.16h-5.16zm0 7.997h5.16v5.16h-5.16zM17.4 16.518h5.16v5.16H17.4zm0 7.997h5.16v5.16H17.4zm0 7.997h5.16v5.16H17.4z"></svg:path>`,
})
export class ArcticonsShiftcalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
