import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiFlag5WavesIcon],svg[arcticons-emoji-flag-5-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 35.87V12.13c2.416.636 4.875 1.272 9.75 1.272c8.478 0 11.022-2.543 19.5-2.543c4.875 0 7.291.636 9.75 1.271v23.74c-2.459-.636-4.875-1.272-9.75-1.272c-8.478 0-11.022 2.543-19.5 2.543c-4.875 0-7.334-.636-9.75-1.272Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 31.122c-2.459-.636-4.875-1.272-9.75-1.272c-8.478 0-11.022 2.544-19.5 2.544c-4.875 0-7.334-.636-9.75-1.272m39-14.244c-2.459-.636-4.875-1.271-9.75-1.271c-8.478 0-11.022 2.543-19.5 2.543c-4.875 0-7.334-.636-9.75-1.272m39 4.748c-2.459-.636-4.875-1.272-9.75-1.272c-8.478 0-11.022 2.544-19.5 2.544c-4.875 0-7.334-.636-9.75-1.272m39 4.748c-2.459-.636-4.875-1.272-9.75-1.272c-8.478 0-11.022 2.544-19.5 2.544c-4.875 0-7.334-.636-9.75-1.272"></svg:path>`,
})
export class ArcticonsEmojiFlag5WavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
