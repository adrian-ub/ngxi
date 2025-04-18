import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastCardIndexDividersIcon],svg[fluent-emoji-high-contrast-card-index-dividers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 2A1.5 1.5 0 0 0 18 3.5V4H5a4 4 0 0 0-4 4v19a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-2v-.5A1.5 1.5 0 0 0 23.5 2zM29 14.535A4 4 0 0 0 27 14H14v-.5a1.5 1.5 0 0 0-1.5-1.5h-4A1.5 1.5 0 0 0 7 13.5v.5H5c-.729 0-1.412.195-2 .535V13a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2zM3 18a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm26-8.465A4 4 0 0 0 27 9h-7v-.5A1.5 1.5 0 0 0 18.5 7h-4A1.5 1.5 0 0 0 13 8.5V9H5c-.729 0-1.412.195-2 .535V8a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2z"></svg:path>`,
})
export class FluentEmojiHighContrastCardIndexDividersIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
