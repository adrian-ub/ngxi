import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastBrownSquareIcon],svg[fluent-emoji-high-contrast-brown-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 1a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zm1 3a1 1 0 0 0-1-1h-1.998L29 5.998zm0 2.705L25.295 3h-4.293L29 10.998zm0 5L20.295 3h-4.293L29 15.998zm0 5L15.295 3h-4.293L29 20.998zm0 5L10.295 3H6.002L29 25.998zm0 5L5.295 3H4a1 1 0 0 0-1 1v.998L27.002 29H28a1 1 0 0 0 1-1zM26.295 29L3 5.705v4.293L22.002 29zm-5 0L3 10.705v4.293L17.002 29zm-5 0L3 15.705v4.293L12.002 29zm-5 0L3 20.705v4.293L7.002 29zm-5 0L3 25.705V28a1 1 0 0 0 1 1z"></svg:path>`,
})
export class FluentEmojiHighContrastBrownSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
