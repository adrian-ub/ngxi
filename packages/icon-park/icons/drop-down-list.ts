import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDropDownListIcon],svg[icon-park-drop-down-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 28L24 40L8 28"></svg:path><svg:path d="M8 10H40"></svg:path><svg:path d="M8 18H40"></svg:path></svg:g>`,
})
export class IconParkDropDownListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
