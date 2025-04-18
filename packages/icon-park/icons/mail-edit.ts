import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMailEditIcon],svg[icon-park-mail-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path fill="#2F88FF" d="M35 39L43 32L39 28L31 35V39H35Z"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path></svg:g>`,
})
export class IconParkMailEditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
