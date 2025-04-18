import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMenuFoldIcon],svg[icon-park-menu-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 11H40"></svg:path><svg:path d="M8 24H40"></svg:path><svg:path d="M8 37H40"></svg:path><svg:path d="M13.6568 29.6568L8 23.9999L13.6568 18.343"></svg:path></svg:g>`,
})
export class IconParkMenuFoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
