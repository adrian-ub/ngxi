import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLayersIcon],svg[icon-park-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M4 11.9143L24 19L44 11.9143L24 5L4 11.9143Z"></svg:path><svg:path stroke-linecap="round" d="M4 20L24 27L44 20"></svg:path><svg:path stroke-linecap="round" d="M4 28L24 35L44 28"></svg:path><svg:path stroke-linecap="round" d="M4 36L24 43L44 36"></svg:path></svg:g>`,
})
export class IconParkLayersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
