import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWifiXBoldIcon],svg[ph-wifi-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m73-124l15.52-15.51a12 12 0 0 0-17-17L200 63l-15.51-15.49a12 12 0 0 0-17 17L183 80l-15.49 15.51a12 12 0 0 0 17 17L200 97l15.51 15.52a12 12 0 0 0 17-17Zm-41.9 75.3a80 80 0 0 0-94.13 0a12 12 0 1 0 14.13 19.4a56 56 0 0 1 65.87 0a12 12 0 0 0 14.13-19.4M140 56a12 12 0 0 0-12-12A176.27 176.27 0 0 0 16.39 83.91a12 12 0 1 0 15.23 18.55A152.24 152.24 0 0 1 128 68a12 12 0 0 0 12-12m0 48a12 12 0 0 0-12-12a126.66 126.66 0 0 0-79.45 27.64a12 12 0 0 0 14.9 18.81A102.9 102.9 0 0 1 128 116a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhWifiXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
