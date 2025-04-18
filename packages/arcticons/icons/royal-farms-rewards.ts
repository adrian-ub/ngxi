import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRoyalFarmsRewardsIcon],svg[arcticons-royal-farms-rewards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.38 22.588V11.5h3.63c2.051 0 3.715 1.667 3.715 3.724s-1.664 3.724-3.716 3.724h-3.63m3.63 0l3.63 3.637m-7.26 8.371h3.604M15.379 36.5V25.412h5.544"></svg:path><svg:rect width="7.346" height="11.088" x="25.275" y="11.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.673" ry="3.673"></svg:rect><svg:rect width="7.346" height="11.088" x="25.275" y="25.412" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.673" ry="3.673"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsRoyalFarmsRewardsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
