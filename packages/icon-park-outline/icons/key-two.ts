import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineKeyTwoIcon],svg[icon-park-outline-key-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="15" cy="33" r="8"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m29 16l7 6m-16 4L36 8l7 6"></svg:path></svg:g>`,
})
export class IconParkOutlineKeyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
