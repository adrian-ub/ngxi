import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastSparkleIcon],svg[fluent-emoji-high-contrast-sparkle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m16.505 5.616l.704 2.392a10 10 0 0 0 6.77 6.77l2.392.704c.478.14.478.818 0 .959l-2.393.704a10 10 0 0 0-6.769 6.77l-.704 2.392c-.141.478-.819.478-.96 0l-.704-2.393a10 10 0 0 0-6.769-6.769l-2.392-.704c-.479-.14-.479-.818 0-.96l2.392-.704a10 10 0 0 0 6.77-6.769l.703-2.392a.5.5 0 0 1 .96 0"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastSparkleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
