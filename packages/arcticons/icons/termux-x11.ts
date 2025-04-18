import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTermuxX11Icon],svg[arcticons-termux-x11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.888 4.5H7.39m16.627 19.278L13.986 4.672m4.723 19.369L7.394 4.58m.298 38.793l11.035-19.276M12.817 43.5H7.633m5.217-.014l11.59-19.818M29.829 4.51h5.977M21.712 19.237l8.099-14.592m-5.605 19.431L35.811 4.577m-5.656 30.885l-6.231-11.868m1.595 12.02l-3.695-6.818m3.751 6.827l4.603-.046m-1.672 2.282H40.61v4.033H28.506z"></svg:path>`,
})
export class ArcticonsTermuxX11Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
