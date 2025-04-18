import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCuttingIcon],svg[icon-park-cutting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10H38V42"></svg:path><svg:path d="M10.5483 37.4519L42.385 5.61519"></svg:path><svg:path d="M42 38H10V6"></svg:path></svg:g>`,
})
export class IconParkCuttingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
