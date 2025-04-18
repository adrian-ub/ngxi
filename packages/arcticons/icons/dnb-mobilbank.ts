import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDnbMobilbankIcon],svg[arcticons-dnb-mobilbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.884 34.759V19.241l6.232 9.518V13.24M11.305 28.759v-9.518h2.117c2.273 0 4.115 1.864 4.115 4.164v1.19c0 2.3-1.842 4.164-4.115 4.164zM34.342 24c1.299 0 2.352 1.065 2.352 2.38s-1.053 2.379-2.352 2.379h-3.88v-9.518h3.88c1.299 0 2.352 1.065 2.352 2.38S35.64 24 34.342 24m.5 0h-3.88"></svg:path>`,
})
export class ArcticonsDnbMobilbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
