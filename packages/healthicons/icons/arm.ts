import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsArmIcon],svg[healthicons-arm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 37V27h12.523c.98 0 1.958.12 2.91.358L22 28l.156-.25a12 12 0 0 1 6.562-5.082L34 21v-2.097a4 4 0 0 1 .877-2.499L38 12.5l.367.303a2 2 0 0 1 .345 2.719L38 16.5l2-1.5l.928-1.857a2 2 0 0 1 2.99-.705L44 12.5l-1 7l-5 3l-5.047 6.128a12 12 0 0 1-4.806 3.513L26 33l-.828.828A4 4 0 0 1 22.343 35H21l-4.153 1.384a12 12 0 0 1-3.794.616z"></svg:path>`,
})
export class HealthiconsArmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
