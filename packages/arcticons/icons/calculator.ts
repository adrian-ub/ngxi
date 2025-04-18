import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalculatorIcon],svg[arcticons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.947 25.947a4 4 0 0 0-4 4V38.5a4 4 0 0 0 4 4H38.5a4 4 0 0 0 4-4v-8.553a4 4 0 0 0-4-4zM9.5 5.5a4 4 0 0 0-4 4v8.553a4 4 0 0 0 4 4h8.553a4 4 0 0 0 4-4V9.5a4 4 0 0 0-4-4z"></svg:path><svg:rect width="16.553" height="16.553" x="25.947" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:rect width="16.553" height="16.553" x="5.5" y="25.947" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.776 8.421v10.711m-5.355-5.356h10.711m9.736 17.527h10.711m-10.711 5.842h10.711"></svg:path>`,
})
export class ArcticonsCalculatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
