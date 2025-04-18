import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEraseIcon],svg[icon-park-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 42H44"></svg:path><svg:path fill="#2F88FF" d="M31 4L7 28L13 34H21L41 14L31 4Z"></svg:path></svg:g>`,
})
export class IconParkEraseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
