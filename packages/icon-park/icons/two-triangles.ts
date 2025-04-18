import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoTrianglesIcon],svg[icon-park-two-triangles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z"></svg:path><svg:path fill="#2F88FF" d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z"></svg:path></svg:g>`,
})
export class IconParkTwoTrianglesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
