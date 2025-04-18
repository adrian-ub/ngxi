import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRedAppleIcon],svg[twemoji-red-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M24 7c-3 0-3 1-6 1s-3-1-6-1c-4 0-9 2-9 9c0 11 6 20 10 20c3 0 3-1 5-1s2 1 5 1c4 0 10-9 10-20c0-7.001-5-9-9-9"></svg:path><svg:path fill="#77B255" d="M19 7s3-4 8-4c4 0 6 2 6 2s-4 3-7 3s-7-1-7-1"></svg:path><svg:path fill="#662113" d="M18 10a1 1 0 0 1-1-1c0-3.441 1.2-6.615 3.293-8.707a.999.999 0 1 1 1.414 1.414C19.986 3.427 19 6.085 19 9a1 1 0 0 1-1 1"></svg:path>`,
})
export class TwemojiRedAppleIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
