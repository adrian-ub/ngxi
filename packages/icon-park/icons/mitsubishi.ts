import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMitsubishiIcon],svg[icon-park-mitsubishi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 19L24 30L31 19L24 8L17 19Z"></svg:path><svg:path d="M30.6667 40L24 30H37.3333L44 40H30.6667Z"></svg:path><svg:path d="M17.3333 40L24 30H10.6667L4 40H17.3333Z"></svg:path></svg:g>`,
})
export class IconParkMitsubishiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
