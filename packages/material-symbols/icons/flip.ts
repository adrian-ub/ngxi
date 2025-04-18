import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlipIcon],svg[material-symbols-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4v2H5v14h4zm2 2V1h2v22zm4-2v-2h2v2zm0-16V3h2v2zm4 16v-2h2q0 .825-.587 1.413T19 21m0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3q.825 0 1.413.588T21 5z"></svg:path>`,
})
export class MaterialSymbolsFlipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
