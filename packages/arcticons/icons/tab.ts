import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTabIcon],svg[arcticons-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.018 24.925h8.33m-13.683.802l5.89-5.89m3.628 17.659V24.925m9.753 9.428a3.143 3.143 0 0 1-3.143 3.143h0a3.143 3.143 0 0 1-3.144-3.143V32.31a3.143 3.143 0 0 1 3.144-3.142h0a3.143 3.143 0 0 1 3.143 3.142m0 5.186v-8.328m3.277 3.143a3.143 3.143 0 0 1 3.143-3.143h0a3.143 3.143 0 0 1 3.144 3.143v2.043a3.143 3.143 0 0 1-3.144 3.142h0a3.143 3.143 0 0 1-3.143-3.142m0 3.142V24.925"></svg:path>`,
})
export class ArcticonsTabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
