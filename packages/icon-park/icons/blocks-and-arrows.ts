import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBlocksAndArrowsIcon],svg[icon-park-blocks-and-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M20 6H6V20H20V6Z"></svg:path><svg:path fill="#2F88FF" d="M20 28H6V42H20V28Z"></svg:path><svg:path fill="#2F88FF" d="M42 6H28V20H42V6Z"></svg:path><svg:path d="M28 28L42 42M28 28H42H28ZM28 28V42V28Z"></svg:path></svg:g>`,
})
export class IconParkBlocksAndArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
