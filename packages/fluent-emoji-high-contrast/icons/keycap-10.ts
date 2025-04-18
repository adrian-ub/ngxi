import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastKeycap10Icon],svg[fluent-emoji-high-contrast-keycap-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.9 7.875c.664.266 1.1.91 1.1 1.625v13a1.75 1.75 0 1 1-3.5 0v-8.625l-.157.165a1.75 1.75 0 1 1-2.535-2.413l3.175-3.334a1.75 1.75 0 0 1 1.917-.418M20 7.75a6 6 0 0 0-6 6v4.5a6 6 0 0 0 12 0v-4.5a6 6 0 0 0-6-6m-2.5 6a2.5 2.5 0 0 1 5 0v4.5a2.5 2.5 0 0 1-5 0z"></svg:path><svg:path d="M1 6a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastKeycap10Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
