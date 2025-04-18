import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMusicNote220FilledIcon],svg[fluent-music-note-2-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.987 3.016a1 1 0 0 0-1.285-.79l-7 2.187A1 1 0 0 0 7 5.368V13.5a2.5 2.5 0 1 0 1 2V8.368l7-2.188v5.32a2.5 2.5 0 1 0 1 2V3.18q0-.083-.013-.164"></svg:path>`,
})
export class FluentMusicNote220FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
