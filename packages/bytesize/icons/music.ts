import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeMusicIcon],svg[bytesize-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 25V6l13-3v20M11 13l13-3"></svg:path><svg:ellipse cx="7" cy="25" rx="4" ry="5"></svg:ellipse><svg:ellipse cx="20" cy="23" rx="4" ry="5"></svg:ellipse></svg:g>`,
})
export class BytesizeMusicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
