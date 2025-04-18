import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSunbathIcon],svg[icon-park-sunbath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M11 36V40"></svg:path><svg:path stroke-linejoin="round" d="M6 36L40 36"></svg:path><svg:path stroke-linejoin="round" d="M8 30H24"></svg:path><svg:path stroke-linejoin="round" d="M37 11L34 16"></svg:path><svg:path d="M35 36V40"></svg:path><svg:path stroke-linejoin="round" d="M44 10L29 36"></svg:path><svg:path stroke-linejoin="round" d="M39 19L44 28"></svg:path></svg:g>`,
})
export class IconParkSunbathIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
