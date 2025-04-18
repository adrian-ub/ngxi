import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSearch1Icon],svg[tdesign-map-search-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3c1.15 0 2 .887 2 2.09c0 .809-.523 1.662-1.227 2.405a9 9 0 0 1-.773.72a9 9 0 0 1-.773-.72C7.523 6.752 7 5.899 7 5.09C7 3.884 7.84 3 9 3m3.909 1.2C12.532 2.398 11.026 1 9 1C6.96 1 5.464 2.4 5.09 4.2H2V20h9v-2H4v-3.2l1.957-1.044L9.31 15.88l1.07-1.69l-4.337-2.746L4 12.534V6.2h1.155c.306 1.107 1.014 2.03 1.618 2.67a11 11 0 0 0 1.63 1.4l.033.022l.01.007l.003.002l.002.001l.549.36l.548-.359l.003-.002l.003-.002l.01-.007l.033-.022l.112-.078a11 11 0 0 0 1.517-1.323c.605-.639 1.313-1.562 1.62-2.669H20v4.3h2V4.2zm4.341 9.3a2.75 2.75 0 0 1 1.946 4.693l-.008.008a2.75 2.75 0 1 1-1.938-4.7m3.992 5.325a4.75 4.75 0 1 0-1.414 1.415l1.67 1.674l1.416-1.412z"></svg:path>`,
})
export class TdesignMapSearch1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
