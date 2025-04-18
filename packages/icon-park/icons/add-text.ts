import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAddTextIcon],svg[icon-park-add-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M4 8H32"></svg:path><svg:path d="M28 21H44"></svg:path><svg:path d="M18 42L18 8"></svg:path><svg:path d="M36 42L36 21"></svg:path></svg:g>`,
})
export class IconParkAddTextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
