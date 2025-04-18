import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAidsIcon],svg[arcticons-aids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 6.785h5.155M5.5 10.888h5.155M5.5 14.991h5.155M5.5 19.094h5.155M5.5 23.197h5.155m2.806-16.412h5.155m-5.155 4.103h5.155m-5.155 4.103h5.155m2.806-8.206h5.156m-5.156 4.103h5.156m-5.156 4.103h5.156m-5.156 4.103h5.156m-5.156 4.103h5.156M21.422 27.3h5.156m2.806-20.515h5.155m-5.155 4.103h5.155m-5.155 4.103h5.155m-5.155 4.103h5.155m2.806-12.309H42.5m-5.155 4.103H42.5m-5.155 4.103H42.5m-5.155 4.103H42.5m-5.155 4.103H42.5m-25.849 8.22H31.35L24 41.215z"></svg:path>`,
})
export class ArcticonsAidsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
