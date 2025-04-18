import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDocFailIcon],svg[icon-park-doc-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V6C40 4.89543 39.1046 4 38 4Z"></svg:path><svg:path stroke="#fff" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" d="M17 36H24"></svg:path><svg:path stroke="#fff" d="M20 21L28 13"></svg:path><svg:path stroke="#fff" d="M28 21L20 13"></svg:path></svg:g>`,
})
export class IconParkDocFailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
