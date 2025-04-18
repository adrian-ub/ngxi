import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastPotableWaterIcon],svg[fluent-emoji-high-contrast-potable-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 5a1 1 0 1 0 0 2h1v1h-2a6.5 6.5 0 0 0-6 6.481a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5a2.5 2.5 0 0 1 2-2.45V12h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4V7h1a1 1 0 1 0 0-2zM7.316 17.1l2.458 8.19a1 1 0 0 0 .958.713h4.497a1 1 0 0 0 .958-.71l2.478-8.208a.845.845 0 0 0-1.615-.498l-.968 3.082a.5.5 0 0 1-.477.35h-5.246a.5.5 0 0 1-.479-.356l-.92-3.057a.858.858 0 0 0-1.644.494"></svg:path><svg:path d="M1 6a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastPotableWaterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
