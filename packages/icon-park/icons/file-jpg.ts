import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileJpgIcon],svg[icon-park-file-jpg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M31 18H21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M26 18V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 30C18 32.2091 19.7909 34 22 34C24.2091 34 26 32.2091 26 30"></svg:path></svg:g>`,
})
export class IconParkFileJpgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
