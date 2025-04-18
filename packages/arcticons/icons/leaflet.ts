import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLeafletIcon],svg[arcticons-leaflet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5s-11.069 9.052-13.722 22.165S21.537 43.5 24 43.5M10.506 25.56l10.93 6.512"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 21.366l-2.565 4.885v16.776m-6.88-27.177L24 21.366M24 4.5s11.069 9.052 13.722 22.165S26.463 43.5 24 43.5m13.494-17.94l-10.93 6.512"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 21.366l2.565 4.885v16.776m6.88-27.177L24 21.366m0 0V4.5"></svg:path>`,
})
export class ArcticonsLeafletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
