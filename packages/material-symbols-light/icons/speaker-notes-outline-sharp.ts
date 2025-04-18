import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeakerNotesOutlineSharpIcon],svg[material-symbols-light-speaker-notes-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.154 13.539q.31 0 .54-.23q.229-.23.229-.54t-.23-.54t-.54-.229t-.538.23t-.23.54q0 .309.23.539t.539.23m0-2.77q.31 0 .54-.23q.229-.23.229-.539t-.23-.54t-.54-.23t-.538.23t-.23.54t.23.54t.539.23m0-2.77q.31 0 .54-.23t.229-.54t-.23-.539t-.54-.23t-.538.23t-.23.54t.23.54t.539.229m3.077 5.27H14.5v-1h-4.27zm0-2.77H17.5v-1h-7.27zm0-2.77H17.5v-1h-7.27zM3 20.078V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z"></svg:path>`,
})
export class MaterialSymbolsLightSpeakerNotesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
