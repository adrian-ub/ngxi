import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCursorDuotoneIcon],svg[iconamoon-cursor-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M11 21L4 4l17 7l-6.265 2.685a2 2 0 0 0-1.05 1.05z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 21L4 4l17 7l-6.265 2.685a2 2 0 0 0-1.05 1.05z"></svg:path></svg:g>`,
})
export class IconamoonCursorDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
