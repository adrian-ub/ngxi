import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSettingsVoiceIcon],svg[material-symbols-settings-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 24q-.425 0-.712-.288T7 23t.288-.712T8 22t.713.288T9 23t-.288.713T8 24m4 0q-.425 0-.712-.288T11 23t.288-.712T12 22t.713.288T13 23t-.288.713T12 24m4 0q-.425 0-.712-.288T15 23t.288-.712T16 22t.713.288T17 23t-.288.713T16 24m-4-10q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2t2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.1q-2.6-.35-4.3-2.312T5 11h2q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h2q0 2.625-1.7 4.588T13 17.9V21z"></svg:path>`,
})
export class MaterialSymbolsSettingsVoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
