import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlipToBackIcon],svg[material-symbols-flip-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V7h2v12h12v2zm4-6v2q-.825 0-1.412-.587T7 15zm-2-2v-2h2v2zm0-4V7h2v2zm2-4H7q0-.825.588-1.412T9 3zm2 12v-2h2v2zm0-12V3h2v2zm4 0V3h2v2zm0 12v-2h2v2zm4-12V3q.825 0 1.413.588T21 5zm0 10h2q0 .825-.587 1.413T19 17zm0-2v-2h2v2zm0-4V7h2v2z"></svg:path>`,
})
export class MaterialSymbolsFlipToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
