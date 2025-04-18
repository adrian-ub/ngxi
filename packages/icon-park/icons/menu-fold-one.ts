import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMenuFoldOneIcon],svg[icon-park-menu-fold-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 10.5H40"></svg:path><svg:path stroke-linecap="round" d="M24 19.5H40"></svg:path><svg:path stroke-linecap="round" d="M24 28.5H40"></svg:path><svg:path stroke-linecap="round" d="M8 37.5H40"></svg:path><svg:path fill="#2F88FF" d="M8 19L16 24L8 29V19Z"></svg:path></svg:g>`,
})
export class IconParkMenuFoldOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
