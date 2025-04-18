import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMemoryAltOutlineIcon],svg[material-symbols-memory-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h2V9H6zm5 0h2V9h-2zm5 0h2V9h-2zM4 17h16V7H4zm0 0V7zm1 4v-2H4q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h1V3h2v2h4V3h2v2h4V3h2v2h1q.825 0 1.413.588T22 7v10q0 .825-.587 1.413T20 19h-1v2h-2v-2h-4v2h-2v-2H7v2z"></svg:path>`,
})
export class MaterialSymbolsMemoryAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
