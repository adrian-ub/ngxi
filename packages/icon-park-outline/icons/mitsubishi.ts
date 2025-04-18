import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMitsubishiIcon],svg[icon-park-outline-mitsubishi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="m17 19l7 11l7-11l-7-11zm13.667 21L24 30h13.333L44 40zm-13.334 0L24 30H10.667L4 40z"></svg:path>`,
})
export class IconParkOutlineMitsubishiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
