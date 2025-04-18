import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastFlyingSaucerIcon],svg[fluent-emoji-high-contrast-flying-saucer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M17.48 5a7.45 7.45 0 0 1 7.44 7.853c3.282 1.457 5.644 4.279 6.62 7.584l.172.586l-.443.422c-2.92 2.778-7.185 4.035-11.378 2.91l-.24-.064L20 30H5l5.533-8.152l-1.091-.292c-4.204-1.124-7.257-4.336-8.401-8.213l-.173-.585l.441-.421c2.49-2.378 5.958-3.644 9.527-3.261A7.45 7.45 0 0 1 17.48 5m-5.048 5.39l10.448 2.8q.05-.363.05-.74a5.45 5.45 0 0 0-10.498-2.06M9.96 19.625l10.45 2.8a9.9 9.9 0 0 0 4.247.2a10 10 0 0 0 3.74-1.454L3.665 14.54a9.93 9.93 0 0 0 6.294 5.083M7.61 12.6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5.08 2.09a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4.09 1.1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4.08 1.09a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.08.09a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastFlyingSaucerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
