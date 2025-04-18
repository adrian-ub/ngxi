import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsColornamerIcon],svg[arcticons-colornamer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:rect width="5.5" height="7.287" x="16.305" y="20.728" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.75" ry="2.75"></svg:rect><svg:rect width="5.5" height="7.287" x="28.453" y="20.728" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.75" ry="2.75"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.73 23.478a2.75 2.75 0 0 1 2.75-2.75h0m-2.751 0v7.288m-12.144-11v9.625c0 .759.616 1.375 1.375 1.375h.413M13.659 26.63a2.75 2.75 0 0 1-2.388 1.386h0a2.75 2.75 0 0 1-2.75-2.75v-1.788a2.75 2.75 0 0 1 2.75-2.75h0c1.02 0 1.91.555 2.385 1.38"></svg:path>`,
})
export class ArcticonsColornamerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
