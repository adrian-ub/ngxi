import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastNazarAmuletIcon],svg[fluent-emoji-high-contrast-nazar-amulet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21.32 16.12a5.12 5.12 0 1 1-10.24 0a5.12 5.12 0 0 1 10.24 0m-2.56 0a2.56 2.56 0 1 0-5.12 0a2.56 2.56 0 0 0 5.12 0"></svg:path><svg:path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15s15-6.716 15-15S24.284 1 16 1m7.88 15.12a7.68 7.68 0 1 1-15.36 0a7.68 7.68 0 0 1 15.36 0"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastNazarAmuletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
