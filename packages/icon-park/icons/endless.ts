import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEndlessIcon],svg[icon-park-endless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 21L35 18L44 24V34L34 40L24 34V13L13 7L4 13V24L13 30L17 27"></svg:path>`,
})
export class IconParkEndlessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
