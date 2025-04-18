import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJourneyIcon],svg[arcticons-journey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.139 42.5H7.86a2.07 2.07 0 0 1-2.069-2.07V17.78a2.07 2.07 0 0 1 2.07-2.069h32.277a2.07 2.07 0 0 1 2.069 2.07v22.65a2.07 2.07 0 0 1-2.07 2.069"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.502 29.411v-7.886h8.285m6.212 15.129h8.324V28.7M8.462 15.713v-3.651a2.02 2.02 0 0 1 2.015-2.015h27.046a2.02 2.02 0 0 1 2.015 2.015v3.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.519 10.047V7.515A2.02 2.02 0 0 1 13.534 5.5h20.932a2.02 2.02 0 0 1 2.015 2.015v2.532"></svg:path>`,
})
export class ArcticonsJourneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
