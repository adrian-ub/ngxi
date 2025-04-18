import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastThermometerIcon],svg[fluent-emoji-high-contrast-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M26.97 21.97a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="m8.834 3.176l12.903 12.903a7 7 0 1 1-5.658 5.658L3.176 8.834a4.004 4.004 0 0 1 0-5.658a4.004 4.004 0 0 1 5.65-.01zm9.48 17.968a5 5 0 1 0 2.83-2.83l-2.419-2.419l-.725.725a.996.996 0 1 1-1.41-1.41l.725-.725l-2.83-2.83l-.725.725a.996.996 0 1 1-1.41-1.41l.725-.725L10.24 7.41l-.72.72a.996.996 0 1 1-1.41-1.41L8.83 6L7.42 4.59c-.79-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastThermometerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
