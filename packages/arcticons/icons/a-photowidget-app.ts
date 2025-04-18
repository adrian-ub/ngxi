import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAPhotowidgetAppIcon],svg[arcticons-a-photowidget-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.671 36.81h13.828a4.315 4.315 0 0 0 4.324-4.306V9.824A4.315 4.315 0 0 0 37.517 5.5H16.249a4.315 4.315 0 0 0-4.324 4.306v14.39zm12.295.001v.404a5.274 5.274 0 0 1-5.263 5.285H11.462a5.274 5.274 0 0 1-5.285-5.263V17.115a5.274 5.274 0 0 1 5.262-5.286h.487"></svg:path>`,
})
export class ArcticonsAPhotowidgetAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
