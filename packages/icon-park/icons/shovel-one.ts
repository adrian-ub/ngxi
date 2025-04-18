import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShovelOneIcon],svg[icon-park-shovel-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M11 4H37L34.1667 24H13.8333L11 4Z"></svg:path><svg:path stroke="#fff" d="M21 11L21 17"></svg:path><svg:path stroke="#fff" d="M27 11L27 17"></svg:path><svg:path stroke="#000" d="M24 24V44"></svg:path></svg:g>`,
})
export class IconParkShovelOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
