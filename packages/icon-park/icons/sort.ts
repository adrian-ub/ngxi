import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSortIcon],svg[icon-park-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42L15 29H33L24 42Z"></svg:path><svg:path d="M24 6L15 19H33L24 6Z"></svg:path></svg:g>`,
})
export class IconParkSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
