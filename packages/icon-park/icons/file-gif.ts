import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileGifIcon],svg[icon-park-file-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31.0083 18H17V34H31.0083V27.0083H26"></svg:path></svg:g>`,
})
export class IconParkFileGifIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
