import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMusicNote224RegularIcon],svg[fluent-music-note-2-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.698 2.148A.75.75 0 0 1 20 2.75v13.5l-.004.079q.004.086.004.171a3.5 3.5 0 1 1-1.5-2.873V7.758l-8.5 2.55v7.942l-.004.079q.004.085.004.171a3.5 3.5 0 1 1-1.5-2.873V5.75a.75.75 0 0 1 .534-.718l10-3a.75.75 0 0 1 .664.116M10 8.742l8.5-2.55V3.758L10 6.308zM6.5 16.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path>`,
})
export class FluentMusicNote224RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
