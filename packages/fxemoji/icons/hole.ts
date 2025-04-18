import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiHoleIcon],svg[fxemoji-hole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="256" cy="249.721" fill="#464A4C" rx="219.043" ry="75.527"></svg:ellipse><svg:path fill="#132028" d="M75.169 287.933c0-41.713 98.069-75.527 219.042-75.527c74.839 0 140.899 12.944 180.41 32.691c-6.932-39.558-102.154-70.903-218.622-70.903c-120.974 0-219.042 33.815-219.042 75.527c0 15.908 14.275 30.664 38.632 42.837a27 27 0 0 1-.42-4.625"></svg:path>`,
})
export class FxemojiHoleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
