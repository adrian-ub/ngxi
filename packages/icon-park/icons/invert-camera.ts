import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInvertCameraIcon],svg[icon-park-invert-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"></svg:path><svg:path stroke-linecap="round" d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"></svg:path><svg:path stroke-linecap="round" d="M42 8V24"></svg:path><svg:path stroke-linecap="round" d="M6 24L6 40"></svg:path><svg:rect width="12" height="8" x="14" y="20" fill="#2F88FF" stroke-linecap="round"></svg:rect><svg:path d="M34 28L32 26.6667V21.3333L34 20V28Z"></svg:path></svg:g>`,
})
export class IconParkInvertCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
