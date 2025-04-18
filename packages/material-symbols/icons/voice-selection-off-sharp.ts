import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVoiceSelectionOffSharpIcon],svg[material-symbols-voice-selection-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.375 18.5l-1.6-1.6q.5-2.025-.075-4t-2.075-3.45l1.4-1.45Q20.4 9.35 21.2 11.15t.8 3.9q0 .9-.162 1.775t-.463 1.675M9.95 7.1L8.1 3.45l1.8-.9l3.4 6.8v1.125zM20.5 23.325L.7 3.5l1.4-1.4l19.8 19.8zM2 22v-2h4.475v-.7q-1.15-.575-1.812-1.662T4 15.275V13h4v-3h2l2 2h-2v3H6v.275q0 .875.538 1.538T7.9 17.7l.65.075V22z"></svg:path>`,
})
export class MaterialSymbolsVoiceSelectionOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
