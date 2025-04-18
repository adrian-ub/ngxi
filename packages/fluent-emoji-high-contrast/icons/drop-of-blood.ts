import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastDropOfBloodIcon],svg[fluent-emoji-high-contrast-drop-of-blood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.64 2.548c-1.174-2.064-4.146-2.064-5.32 0l-6.84 12.03C5.578 16.168 5 18.006 5 20.013a10.983 10.983 0 0 0 12.908 10.815c4.026-.686 7.34-3.704 8.546-7.567c.992-3.175.435-6.094-.876-8.497l-.004-.008z"></svg:path>`,
})
export class FluentEmojiHighContrastDropOfBloodIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
