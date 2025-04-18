import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVoiceChatSharpIcon],svg[material-symbols-light-voice-chat-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.308 10.5h.884v-1h-.884zm2.5 2h.884v-5h-.884zm2.75 2h.884v-9h-.884zm2.75-2h.884v-5h-.884zm2.5-2h.884v-1h-.884zM3 20.077V3h18v14H6.077z"></svg:path>`,
})
export class MaterialSymbolsLightVoiceChatSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
