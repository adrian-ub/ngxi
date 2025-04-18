import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyMobifoneIcon],svg[arcticons-my-mobifone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 38.32V20.65m-4.875 14.624V20.649M43.5 38.32l-4.875-3.046M4.5 38.32l4.875-3.046m17.062 3.046l-4.875-3.046M4.5 38.32V20.65m4.875 14.624V20.649M26.437 38.32V20.65m-4.875 14.624V20.649m-12.187 0a6.094 6.094 0 1 1 12.187 0m4.875 0a6.094 6.094 0 1 1 12.188 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 20.649a10.969 10.969 0 0 1 19.499-6.895m.002-.001A10.969 10.969 0 0 1 43.5 20.648"></svg:path>`,
})
export class ArcticonsMyMobifoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
