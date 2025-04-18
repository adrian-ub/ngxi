import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastEjectButtonIcon],svg[fluent-emoji-high-contrast-eject-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.313 9.649a1 1 0 0 1 1.374 0l7.011 6.624c.658.621.218 1.727-.686 1.727H8.988c-.904 0-1.344-1.106-.686-1.727zM8 22.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5z"></svg:path><svg:path d="M1 6a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastEjectButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
