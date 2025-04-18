import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiFlag2WavesIcon],svg[arcticons-emoji-flag-2-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 32.874V15.126m8.874 7.309l-17.748 3.13m20.744 9.077V10.903a48 48 0 0 0-2.12-.044c-8.478 0-11.022 2.543-19.5 2.543a50 50 0 0 1-2.12-.044v23.74c.654.028 1.357.043 2.12.043c8.478 0 11.022-2.543 19.5-2.543a49 49 0 0 1 2.12.044"></svg:path>`,
})
export class ArcticonsEmojiFlag2WavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
