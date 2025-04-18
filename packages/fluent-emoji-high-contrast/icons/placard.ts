import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastPlacardIcon],svg[fluent-emoji-high-contrast-placard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.5 8a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm1.5 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-.5 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"></svg:path><svg:path d="M24.5 4h-4.626a4.002 4.002 0 0 0-7.748 0H7.5A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20H12v7a4 4 0 0 0 8 0v-7h4.5a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 24.5 4M16 3a2 2 0 0 1 1.732 1h-3.464A2 2 0 0 1 16 3m-2 24v-7h4v7a2 2 0 1 1-4 0M7.5 6h17A1.5 1.5 0 0 1 26 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastPlacardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
