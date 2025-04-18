import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCgeoIcon],svg[arcticons-cgeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 12.9v27.47l13.34-5.27l13.32 5.27L44 35.1V7.63L30.66 12.9L17.34 7.63ZM21.33 30h5.99m-5.99-11.98h5.99m-5.99 5.99h3.91m-3.91-5.99V30"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 22a4 4 0 0 0-4.23-4A4.17 4.17 0 0 0 10 22.25V26a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4h-4m24-4a4 4 0 0 0-4.24-4A4.17 4.17 0 0 0 30 22.25V26a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4z"></svg:path>`,
})
export class ArcticonsCgeoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
