import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDoubleDownIcon],svg[icon-park-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 12L24 24L12 12"></svg:path><svg:path d="M36 24L24 36L12 24"></svg:path></svg:g>`,
})
export class IconParkDoubleDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
