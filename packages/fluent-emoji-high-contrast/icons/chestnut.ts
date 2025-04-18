import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastChestnutIcon],svg[fluent-emoji-high-contrast-chestnut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.987 12.586c2.8 2.624 3.52 6.153 2.69 9.259l-.044.155c-1.09 3.833-4.541 7-9.356 7h-8.569c-4.804 0-8.256-3.167-9.346-7l-.042-.155c-.82-3.106-.11-6.625 2.69-9.26l9.588-9.032a2.05 2.05 0 0 1 2.8 0zM4.464 22c1.023 2.798 3.647 5 7.244 5h8.57c3.607 0 6.23-2.203 7.254-5z"></svg:path>`,
})
export class FluentEmojiHighContrastChestnutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
