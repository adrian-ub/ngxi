import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPillIcon],svg[twemoji-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BB1A34" d="m33.207 19.773l-8.868-8.855L11.105 24.54l8.684 8.685l.001-.001A9.47 9.47 0 0 0 26.5 36c5.246 0 9.5-4.254 9.5-9.5a9.47 9.47 0 0 0-2.793-6.727"></svg:path><svg:path fill="#FDCB58" d="M15.921 2.513A9.45 9.45 0 0 0 9.5 0A9.5 9.5 0 0 0 0 9.5c0 2.479.958 4.73 2.514 6.421l-.014.014l8.605 8.605l13.234-13.622z"></svg:path>`,
})
export class TwemojiPillIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
