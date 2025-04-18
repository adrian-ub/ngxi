import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatEightSpokedAsteriskIcon],svg[fluent-emoji-flat-eight-spoked-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00D26A" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M16 6a1 1 0 0 0-1 1v6.586l-4.657-4.657a1 1 0 0 0-1.414 1.414L13.586 15H7a1 1 0 1 0 0 2h6.586l-4.657 4.657a1 1 0 0 0 1.414 1.414L15 18.414V25a1 1 0 1 0 2 0v-6.586l4.657 4.657a1 1 0 0 0 1.414-1.414L18.414 17H25a1 1 0 1 0 0-2h-6.586l4.657-4.657a1 1 0 0 0-1.414-1.414L17 13.586V7a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatEightSpokedAsteriskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
