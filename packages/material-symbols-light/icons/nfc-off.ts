import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNfcOffIcon],svg[material-symbols-light-nfc-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.422L1.887 3.308l.713-.714l19.223 19.223l-.713.714L18.579 20zM8 9.421V16h6.579l-1-1H9v-4.579zM15 9v3.208l-2.5-2.5V9zm5-3.384v11.592l-4-4V8h-3.5q-.362 0-.621.196q-.26.196-.35.54L6.792 4h11.593q.69 0 1.152.463T20 5.616"></svg:path>`,
})
export class MaterialSymbolsLightNfcOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
