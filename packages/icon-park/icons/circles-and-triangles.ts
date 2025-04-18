import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCirclesAndTrianglesIcon],svg[icon-park-circles-and-triangles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z"></svg:path></svg:g>`,
})
export class IconParkCirclesAndTrianglesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
