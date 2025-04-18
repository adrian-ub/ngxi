import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSentToBackIcon],svg[icon-park-outline-sent-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M30 18h11a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1V30M9.97 6H6v4.034M9.997 30H6v-3.988"></svg:path><svg:path stroke-linejoin="round" d="M26 30h3.997v-3.988M26.002 6H30v3.998"></svg:path><svg:path d="M16.028 6h3.98"></svg:path><svg:path stroke-linejoin="round" d="M6 16v4.015M30 16v4.015M15.992 30H20"></svg:path></svg:g>`,
})
export class IconParkOutlineSentToBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
