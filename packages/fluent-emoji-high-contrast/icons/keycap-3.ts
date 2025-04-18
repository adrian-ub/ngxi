import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastKeycap3Icon],svg[fluent-emoji-high-contrast-keycap-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.694 11.343c-.615 0-1.15.356-1.403.882a1.75 1.75 0 0 1-3.153-1.52a5.056 5.056 0 1 1 8.475 5.388a5.056 5.056 0 1 1-8.737 4.728a1.75 1.75 0 1 1 3.335-1.061a1.557 1.557 0 1 0 1.93-1.964l-.087-.023a1.75 1.75 0 0 1 .252-3.443a1.558 1.558 0 0 0-.612-2.987"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastKeycap3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
