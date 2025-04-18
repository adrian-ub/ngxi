import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiFlag3LinesIcon],svg[arcticons-emoji-flag-3-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.87c-2.437-.636-4.875-1.272-9.75-1.272c-9.75 0-9.75 2.543-19.5 2.543c-4.875 0-7.313-.636-9.75-1.271V12.13c2.437.636 4.875 1.272 9.75 1.272c9.75 0 9.75-2.543 19.5-2.543c4.875 0 7.312.636 9.75 1.271zm-26 1.161V13.292m13 21.416V10.969"></svg:path>`,
})
export class ArcticonsEmojiFlag3LinesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
