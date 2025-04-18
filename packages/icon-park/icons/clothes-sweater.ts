import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesSweaterIcon],svg[icon-park-clothes-sweater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 19V37M11 37V44H37V37M11 37H4V12L9 7L16 4H32L39 7L44 12V37H37M11 37V19"></svg:path><svg:path d="M24 21V44"></svg:path><svg:path d="M9 7L24 21"></svg:path><svg:path d="M16 4L24 21"></svg:path><svg:path d="M32 4L24 21"></svg:path><svg:path d="M39 7L24 21"></svg:path></svg:g>`,
})
export class IconParkClothesSweaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
