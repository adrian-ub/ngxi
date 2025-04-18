import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMinIcon],svg[icon-park-outline-min-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 4v40h40"></svg:path><svg:path d="M10 4s5.313 34 17 34S44 4 44 4"></svg:path><svg:path stroke-dasharray="2 6" d="M10 38h34"></svg:path></svg:g>`,
})
export class IconParkOutlineMinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
