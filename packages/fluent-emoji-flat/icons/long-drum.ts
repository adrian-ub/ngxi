import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLongDrumIcon],svg[fluent-emoji-flat-long-drum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E19747" d="M7 10.49V4l9.5-1L26 4v6.49a9.34 9.34 0 0 1-3.52 7.32L21 19l2.68 9.82a.93.93 0 0 1-.9 1.18H10.23a.94.94 0 0 1-.91-1.18L12 19l-1.48-1.19A9.36 9.36 0 0 1 7 10.49"></svg:path><svg:path fill="#433B6B" d="M15.211 18.75H16V3h1v15.75h.789l2.001-2.28a9.4 9.4 0 0 0 2.33-6.19V2.06h1v8.22c0 2.52-.92 4.96-2.58 6.85l-1.422 1.62h2.132c.41 0 .75.34.75.75s-.34.75-.75.75h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.132l-1.422-1.62c-1.66-1.9-2.58-4.33-2.58-6.85V2.06h1v8.22c0 2.28.83 4.48 2.33 6.19z"></svg:path><svg:path fill="#FFCE7C" d="M26 4H7c-.55 0-1-.45-1-1s.45-1 1-1h19c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLongDrumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
