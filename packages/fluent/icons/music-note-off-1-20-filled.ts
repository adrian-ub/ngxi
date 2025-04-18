import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMusicNoteOff120FilledIcon],svg[fluent-music-note-off-1-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 2.146a.5.5 0 1 0-.708.708L9.5 10.207v2.198a3.25 3.25 0 1 0 .995 2.165l.005-.07v-3.293l6.646 6.647a.5.5 0 0 0 .708-.708zM10.5 7.177v1.202l-1-1V2.5a.5.5 0 0 1 .647-.478l5.088 1.566A2.5 2.5 0 0 1 17 5.978V8.5a.5.5 0 0 1-.647.478z"></svg:path>`,
})
export class FluentMusicNoteOff120FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
