import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPageWithCurlIcon],svg[fluent-emoji-flat-page-with-curl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B4ACBC" d="M4.5 2a1 1 0 0 0-1 1v22c0 2.341 1.997 5 4.5 5h17.5c1.973-.246 3.5-1.96 3.5-4a1 1 0 0 0-1-1h-2.5V3a1 1 0 0 0-1-1z"></svg:path><svg:path fill="#F3EEF8" d="M5 3a.5.5 0 0 0-.5.5v21A4.5 4.5 0 0 0 8.994 29c1.285-.606 2.345-1.707 2.506-3a1 1 0 0 1 1-1h12V3.5A.5.5 0 0 0 24 3z"></svg:path><svg:path fill="#998EA4" d="M8.5 10a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM8 16.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPageWithCurlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
