import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGreatWallIcon],svg[icon-park-great-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 9V40H44V9H36V16H28V9H20V16H12V9H4Z"></svg:path><svg:path d="M4 24H44"></svg:path><svg:path d="M4 32H44"></svg:path><svg:path d="M24 24V32"></svg:path><svg:path d="M16 32V40"></svg:path><svg:path d="M16 16V24"></svg:path><svg:path d="M32 32V40"></svg:path><svg:path d="M32 16V24"></svg:path></svg:g>`,
})
export class IconParkGreatWallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
