import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastKeycap7Icon],svg[fluent-emoji-high-contrast-keycap-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.788 7.972a1.75 1.75 0 1 0 0 3.5h4.46L11.49 21.55a1.75 1.75 0 0 0 3.04 1.736l7.252-12.695a1.75 1.75 0 0 0-1.52-2.619z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastKeycap7Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
