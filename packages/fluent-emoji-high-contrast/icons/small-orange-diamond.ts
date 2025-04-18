import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastSmallOrangeDiamondIcon],svg[fluent-emoji-high-contrast-small-orange-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.636 18.121a3 3 0 0 1 0-4.242l4.243-4.243a3 3 0 0 1 4.242 0l4.243 4.243a3 3 0 0 1 0 4.242l-4.243 4.243a3 3 0 0 1-4.242 0zm1.414-2.828a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l4.243-4.243a1 1 0 0 0 0-1.414l-4.243-4.243a1 1 0 0 0-1.414 0z"></svg:path>`,
})
export class FluentEmojiHighContrastSmallOrangeDiamondIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
