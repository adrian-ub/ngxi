import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesSuitIcon],svg[icon-park-clothes-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 21V37M11 37V44H37V37M11 37H4V10L18 4H30L44 10V37H37M11 37V21"></svg:path><svg:path d="M30 4L24 18M24 18L18 4M24 18V37V44"></svg:path><svg:path d="M30 4L24 18"></svg:path><svg:path d="M24 18L18 4"></svg:path><svg:path d="M18 4L14 12L18 17.5L16 23L24 37"></svg:path><svg:path d="M30 4L35 12L30 17.5L32 23L24 37"></svg:path></svg:g>`,
})
export class IconParkClothesSuitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
