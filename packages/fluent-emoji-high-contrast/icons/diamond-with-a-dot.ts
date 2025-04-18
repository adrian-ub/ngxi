import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastDiamondWithADotIcon],svg[fluent-emoji-high-contrast-diamond-with-a-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.778 11.05a3 3 0 0 0-1.954-.874a3 3 0 0 0-.874-1.954l-2.83-2.829a3 3 0 0 0-4.242 0L11.05 8.222a3 3 0 0 0-.874 1.954c-.711.04-1.41.331-1.954.874l-2.829 2.83a3 3 0 0 0 0 4.242l2.829 2.829a3 3 0 0 0 1.954.874c.04.711.331 1.41.874 1.954l2.829 2.829a3 3 0 0 0 4.242 0l2.829-2.829a3 3 0 0 0 .874-1.954a3 3 0 0 0 1.954-.874l2.829-2.829a3 3 0 0 0 0-4.242zM12.465 9.636l2.828-2.828a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.414l-2.242 2.242A3 3 0 0 0 16 13a3 3 0 0 0-1.293.292l-2.243-2.242a1 1 0 0 1 0-1.414m6.243 7.658c.187-.392.292-.83.292-1.294a3 3 0 0 0-.292-1.293l2.242-2.243a1 1 0 0 1 1.414 0l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 0 1-1.414 0zm-4.001 1.414a3 3 0 0 0 2.587 0l2.242 2.242a1 1 0 0 1 0 1.414l-2.829 2.828a1 1 0 0 1-1.414 0l-2.828-2.828a1 1 0 0 1 0-1.414zm-1.415-4.001a3 3 0 0 0 0 2.587l-2.242 2.242a1 1 0 0 1-1.414 0l-2.828-2.829a1 1 0 0 1 0-1.414l2.828-2.828a1 1 0 0 1 1.414 0z"></svg:path>`,
})
export class FluentEmojiHighContrastDiamondWithADotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
