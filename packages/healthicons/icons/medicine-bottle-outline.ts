import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicineBottleOutlineIcon],svg[healthicons-medicine-bottle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23 23v5h-5v2h5v5h2v-5h5v-2h-5v-5z"></svg:path><svg:path fill-rule="evenodd" d="M9 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V18a3 3 0 0 1-3-3zm5 11h20v23a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1zm22-2h-4V6h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M30 6h-5v10h5zM12 6h4v10h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m6 10V6h5v10z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicineBottleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
