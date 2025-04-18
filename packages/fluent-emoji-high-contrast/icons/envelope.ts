import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastEnvelopeIcon],svg[fluent-emoji-high-contrast-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7.01C1 5.898 1.898 5 3.01 5H29c1.109 0 2 .904 2 2.01V25c0 1.109-.904 2-2.01 2H3.01A2.007 2.007 0 0 1 1 24.99zm2-.005v.497l12.326 7.854c.413.262.935.262 1.348 0L29 7.51v-.508L28.996 7H3.005l-.003.002zm26 2.877l-10.047 6.394L29 22.671zm-12.01 7.516a3.25 3.25 0 0 1-1.98 0L3.08 25h25.855zm-3.941-1.122L3 9.873V22.68z"></svg:path>`,
})
export class FluentEmojiHighContrastEnvelopeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
