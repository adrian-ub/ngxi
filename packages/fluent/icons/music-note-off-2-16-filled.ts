import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMusicNoteOff216FilledIcon],svg[fluent-music-note-off-2-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.553 13.26l1.593 1.594a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L5 5.707v5.56A2 2 0 1 0 6 13V7.352l.475-.17l3.265 3.265a2 2 0 1 0 2.813 2.813M12 5.21v4.669l1 1V1.926a.8.8 0 0 0-1.07-.754L5.568 3.445L8.56 6.438z"></svg:path>`,
})
export class FluentMusicNoteOff216FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
