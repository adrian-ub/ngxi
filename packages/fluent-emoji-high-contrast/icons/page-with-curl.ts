import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastPageWithCurlIcon],svg[fluent-emoji-high-contrast-page-with-curl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4h18v21h-11a1 1 0 0 0-1 1h-.03c-.095.751-.487 1.438-1.05 2H8.5a3 3 0 0 1-3-3zm20 21V3a1 1 0 0 0-1-1h-20a1 1 0 0 0-1 1v22a5 5 0 0 0 3.305 4.705c.361.18.925.295 1.195.295h17.5v-.03A4 4 0 0 0 29 26a1 1 0 0 0-1-1zm-17-15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM8 16.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentEmojiHighContrastPageWithCurlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
