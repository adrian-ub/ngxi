import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMuseumTwoIcon],svg[icon-park-museum-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44H44"></svg:path><svg:path fill="#2F88FF" d="M8 7.27273C8 7.27273 15 4 24 4C33 4 40 7.27273 40 7.27273V13H8V7.27273Z"></svg:path><svg:path stroke-linecap="round" d="M10 13V38"></svg:path><svg:path stroke-linecap="round" d="M17 13V38"></svg:path><svg:path stroke-linecap="round" d="M24 13V38"></svg:path><svg:path stroke-linecap="round" d="M31 13V38"></svg:path><svg:path stroke-linecap="round" d="M38 13V38"></svg:path><svg:rect width="34" height="6" x="7" y="38"></svg:rect></svg:g>`,
})
export class IconParkMuseumTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
