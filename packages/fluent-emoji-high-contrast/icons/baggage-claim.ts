import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastBaggageClaimIcon],svg[fluent-emoji-high-contrast-baggage-claim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 8.75q0 .127.011.25H11.25a.25.25 0 0 0-.25.25v11.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V9.25a.25.25 0 0 0-.25-.25h-2.011q.01-.123.011-.25a2.75 2.75 0 1 0-5.5 0m4.5 0q0 .127-.018.25h-3.464a1.75 1.75 0 1 1 3.482-.25M7 10a1 1 0 0 1 1-1h1.75a.25.25 0 0 1 .25.25v11.5a.25.25 0 0 1-.25.25H8a1 1 0 0 1-1-1zm15.25 11a.25.25 0 0 1-.25-.25V9.25a.25.25 0 0 1 .25-.25H24a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm3.25 2a.5.5 0 0 1 0 1H23a1 1 0 0 1-2 0h-2a1 1 0 0 1-2 0h-2a1 1 0 0 1-2 0h-2a1 1 0 0 1-2 0H6.5a.5.5 0 0 1 0-1z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastBaggageClaimIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
