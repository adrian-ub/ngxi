import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeakerNotesOutlineIcon],svg[material-symbols-light-speaker-notes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.154 13.539q.31 0 .54-.23q.229-.23.229-.54t-.23-.54t-.54-.229t-.538.23t-.23.54q0 .309.23.539t.539.23m0-2.77q.31 0 .54-.23q.229-.23.229-.539t-.23-.54t-.54-.23t-.538.23t-.23.54t.23.54t.539.23m0-2.77q.31 0 .54-.23t.229-.54t-.23-.539t-.54-.23t-.538.23t-.23.54t.23.54t.539.229m3.077 5.27H14.5v-1h-4.27zm0-2.77H17.5v-1h-7.27zm0-2.77H17.5v-1h-7.27zM3 20.078V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17H6.077zM5.65 16h13.735q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T19.385 4H4.615q-.23 0-.423.192T4 4.615v13.03zM4 16V4z"></svg:path>`,
})
export class MaterialSymbolsLightSpeakerNotesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
