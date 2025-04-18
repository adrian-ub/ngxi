import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShovelIcon],svg[icon-park-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M13 4H35L34 13L25.5 19H22.5L14 13L13 4Z"></svg:path><svg:path d="M24 19V30"></svg:path><svg:rect width="6" height="14" x="21" y="30" fill="#2F88FF" rx="3"></svg:rect></svg:g>`,
})
export class IconParkShovelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
