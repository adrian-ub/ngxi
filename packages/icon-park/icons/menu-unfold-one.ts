import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMenuUnfoldOneIcon],svg[icon-park-menu-unfold-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 10.5H40"></svg:path><svg:path stroke-linecap="round" d="M24 19.5H40"></svg:path><svg:path stroke-linecap="round" d="M24 28.5H40"></svg:path><svg:path stroke-linecap="round" d="M8 37.5H40"></svg:path><svg:path fill="#2F88FF" d="M16 19L8 24L16 29V19Z"></svg:path></svg:g>`,
})
export class IconParkMenuUnfoldOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
