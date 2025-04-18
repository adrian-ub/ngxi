import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicineBottleNegativeIcon],svg[healthicons-medicine-bottle-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsMedicineBottleNegative0)"><svg:path d="M16 16h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4zm7 0h-5V6h5zm7 0h-5V6h5zm2 0V6h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm-9 19v-5h-5v-2h5v-5h2v5h5v2h-5v5z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM12 4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v23a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMedicineBottleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMedicineBottleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
