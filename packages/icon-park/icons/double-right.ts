import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDoubleRightIcon],svg[icon-park-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 12L24 24L12 36"></svg:path><svg:path d="M24 12L36 24L24 36"></svg:path></svg:g>`,
})
export class IconParkDoubleRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
