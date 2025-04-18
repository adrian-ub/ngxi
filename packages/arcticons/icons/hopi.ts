import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHopiIcon],svg[arcticons-hopi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.811 16.164v12.433m-.001-5.219c0-1.688 1.382-3.07 3.07-3.07s3.07 1.382 3.07 3.07v5.065m12.143-2.916c0 1.688 1.381 3.07 3.07 3.07s3.07-1.382 3.07-3.07V23.53c0-1.688-1.382-3.07-3.07-3.07s-3.07 1.382-3.07 3.07m0-3.222v12.279m-9.145-7.214c0 1.688 1.382 3.07 3.07 3.07s3.07-1.382 3.07-3.07v-1.996c0-1.688-1.382-3.07-3.07-3.07s-3.07 1.382-3.07 3.07zm18.491-5.065v8.288"></svg:path><svg:circle cx="37.439" cy="16.163" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsHopiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
