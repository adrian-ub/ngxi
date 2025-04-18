import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeakerNotesOffIcon],svg[material-symbols-light-speaker-notes-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.27 21.685L15.572 17H6.077L3 20.077V4.116h1.116l6.653 6.653H9.354L1.008 2.423l.707-.707l19.262 19.261zm-.57-4.72L13.292 10.5H17.5v-1h-5.208l-1.942-2h7.15v-1H9.942v.592L5.85 3h13.535q.69 0 1.153.463T21 4.615v10.77q0 .65-.363 1.041q-.362.391-.937.54M7.154 13.769q.31 0 .54-.23q.229-.23.229-.539t-.23-.54t-.54-.23t-.539.23t-.23.54t.23.54t.54.23m0-3q.31 0 .54-.23q.229-.23.229-.54t-.23-.54t-.54-.23t-.538.23t-.23.54t.23.54t.539.23"></svg:path>`,
})
export class MaterialSymbolsLightSpeakerNotesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
