import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMusicNote224FilledIcon],svg[fluent-music-note-2-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2.75a.75.75 0 0 0-.965-.718l-10 3a.75.75 0 0 0-.535.718v9.877a3.5 3.5 0 1 0 1.496 2.702L10 18.25v-7.942l8.5-2.55v5.87a3.5 3.5 0 1 0 1.496 2.702l.004-.08z"></svg:path>`,
})
export class FluentMusicNote224FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
