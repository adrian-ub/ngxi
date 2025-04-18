import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiJapanesePostOfficeIcon],svg[twemoji-japanese-post-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#AAB8C2" d="M0 18v16a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V18z"></svg:path><svg:path fill="#66757F" d="m0 18l18-6.352L36 18z"></svg:path><svg:path fill="#55ACEE" d="M2 20h32v4H2zm0 6h32v4H2z"></svg:path><svg:path fill="#AAB8C2" d="M6 19h24v16H6z"></svg:path><svg:path fill="#CCD6DD" d="M8 5h20v31H8z"></svg:path><svg:path fill="#55ACEE" d="M10 20h16v4H10zm0 6h16v4H10z"></svg:path><svg:path fill="#CCD6DD" d="M14 13h2v18h-2zm6 0h2v18h-2z"></svg:path><svg:path fill="#3B88C3" d="M16 32h4v4h-4z"></svg:path><svg:path fill="#DD2E44" d="M13 7h10v2H13zm0 4v2h4v4h2v-4h4v-2z"></svg:path><svg:path fill="#66757F" d="m8 5l10-5l10 5z"></svg:path>`,
})
export class TwemojiJapanesePostOfficeIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
