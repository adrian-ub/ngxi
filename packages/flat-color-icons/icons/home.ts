import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsHomeIcon],svg[flat-color-icons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E8EAF6" d="M42 39H6V23L24 6l18 17z"></svg:path><svg:path fill="#C5CAE9" d="m39 21l-5-5V9h5zM6 39h36v5H6z"></svg:path><svg:path fill="#B71C1C" d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z"></svg:path><svg:path fill="#D84315" d="M18 28h12v16H18z"></svg:path><svg:path fill="#01579B" d="M21 17h6v6h-6z"></svg:path><svg:path fill="#FF8A65" d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5"></svg:path>`,
})
export class FlatColorIconsHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
