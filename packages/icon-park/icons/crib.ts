import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCribIcon],svg[icon-park-crib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 6V44"></svg:path><svg:path d="M10 40H38"></svg:path><svg:path d="M10 34H38"></svg:path><svg:path d="M6 12H42"></svg:path><svg:path d="M35 6L41 6"></svg:path><svg:path d="M7 6L13 6"></svg:path><svg:path d="M10 6V44"></svg:path><svg:path d="M17 12V28"></svg:path><svg:path d="M24 12V28"></svg:path><svg:path d="M31 12V28"></svg:path></svg:g>`,
})
export class IconParkCribIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
