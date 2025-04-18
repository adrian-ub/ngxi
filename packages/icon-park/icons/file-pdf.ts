import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFilePdfIcon],svg[icon-park-file-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M18 18H30V25.9917L18.0083 26L18 18Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 18V34"></svg:path></svg:g>`,
})
export class IconParkFilePdfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
