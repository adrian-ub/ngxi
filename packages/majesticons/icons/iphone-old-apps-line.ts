import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsIphoneOldAppsLineIcon],svg[majesticons-iphone-old-apps-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 19V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9 6.001V6m3 .001V6m3 .001V6m-3 12.006V18"></svg:path>`,
})
export class MajesticonsIphoneOldAppsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
