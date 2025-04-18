import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCrownIcon],svg[icon-park-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9 40L4 17L14 22L24 8L34 22L44 17L39 40H9Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 33C26.2091 33 28 31.2091 28 29C28 26.7909 26.2091 25 24 25C21.7909 25 20 26.7909 20 29C20 31.2091 21.7909 33 24 33Z"></svg:path></svg:g>`,
})
export class IconParkCrownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
