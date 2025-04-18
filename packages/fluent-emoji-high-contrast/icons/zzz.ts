import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastZzzIcon],svg[fluent-emoji-high-contrast-zzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.662 8.552a1.5 1.5 0 0 1 .159 1.66l-5.446 10.113l5.8-1.29a1.5 1.5 0 0 1 .65 2.93l-9 2a1.5 1.5 0 0 1-1.646-2.176l5.283-9.812l-6.531 1.96a1.5 1.5 0 1 1-.862-2.874l10-3a1.5 1.5 0 0 1 1.593.489"></svg:path><svg:path d="M9 19a1 1 0 0 1 1-1h7a1 1 0 0 1 .753 1.659L12.203 26H17a1 1 0 1 1 0 2h-7a1 1 0 0 1-.753-1.658L14.797 20H10a1 1 0 0 1-1-1"></svg:path><svg:path d="M4.287 21.042a1 1 0 0 0-.574 1.916l3.102.93L2.4 27.2a1 1 0 0 0 .404 1.78l5 1a1 1 0 0 0 .392-1.96l-2.807-.562L9.6 24.3a1 1 0 0 0-.313-1.758z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastZzzIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
