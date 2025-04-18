import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProxdroidIcon],svg[arcticons-proxdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 8.796a8.26 8.26 0 0 0-11.673.522L24 17.878l-7.827-8.56A8.26 8.26 0 0 0 4.5 8.796h0L18.402 24L4.5 39.205h0a8.26 8.26 0 0 0 11.673-.523L24 30.122l7.827 8.56a8.26 8.26 0 0 0 11.673.523h0L29.598 24Z"></svg:path>`,
})
export class ArcticonsProxdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
