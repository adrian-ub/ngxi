import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastTelevisionIcon],svg[fluent-emoji-high-contrast-television-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25.75 10.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 4a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M6 11a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></svg:path><svg:path d="M19.95 2a1 1 0 0 0-1.415 0l-3 3h-1.12l-3-3A1 1 0 0 0 10 3.414L11.586 5H6a4 4 0 0 0-4 4v13a4 4 0 0 0 4 4h.678l-.696 2.599a1.57 1.57 0 0 0 2.962 1.02L10.48 26h11.04l1.537 3.619a1.57 1.57 0 0 0 2.962-1.02L25.32 26H26a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-7.636l1.586-1.586a1 1 0 0 0 0-1.414M6 7h20a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastTelevisionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
