import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMymoneroIcon],svg[arcticons-mymonero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 13.5c0-2.216 1.784-4 4-4h21c2.216 0 4 1.784 4 4m-33 0h37m-9.256 19.125v-9.25L28.622 30L24 23.375L19.378 30l-4.622-6.625v9.25M24 23.375v9.25"></svg:path>`,
})
export class ArcticonsMymoneroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
