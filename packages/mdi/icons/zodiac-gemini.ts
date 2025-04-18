import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacGeminiIcon],svg[mdi-zodiac-gemini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5.3c1.35-.33 2.66-.76 3.94-1.3l-.76-1.86a23.75 23.75 0 0 1-18.36.03L2.06 4c1.28.54 2.59.97 3.94 1.3v13.4c-1.35.33-2.66.76-3.94 1.3l.76 1.86a23.94 23.94 0 0 1 18.36 0l.76-1.86c-1.28-.54-2.59-.97-3.94-1.3zm-10 13V5.69c1.32.2 2.66.31 4 .31s2.68-.11 4-.31v12.62a26.2 26.2 0 0 0-8 0z"></svg:path>`,
})
export class MdiZodiacGeminiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
