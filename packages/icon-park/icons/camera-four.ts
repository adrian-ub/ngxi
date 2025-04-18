import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraFourIcon],svg[icon-park-camera-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M8 10V24C8 32.8366 15.1634 40 24 40V40C32.8366 40 40 32.8366 40 24V10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 10H44"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"></svg:path></svg:g>`,
})
export class IconParkCameraFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
