import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBarCodeIcon],svg[icon-park-bar-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 20H44"></svg:path><svg:path d="M6 6V14"></svg:path><svg:path d="M6 25.9956V37.9992"></svg:path><svg:path d="M20.4 6V14"></svg:path><svg:path d="M20.4 26V42"></svg:path><svg:path d="M34.8 6V14"></svg:path><svg:path d="M42 6V14"></svg:path><svg:path d="M34.8 26V34"></svg:path><svg:path d="M13.2 6V14"></svg:path><svg:path d="M13.2 26V34"></svg:path><svg:path d="M27.6 6V14"></svg:path><svg:path d="M27.6 26V34"></svg:path><svg:path d="M42 26V38"></svg:path></svg:g>`,
})
export class IconParkBarCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
