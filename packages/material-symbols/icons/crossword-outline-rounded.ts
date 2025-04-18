import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCrosswordOutlineRoundedIcon],svg[material-symbols-crossword-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16v4h4v-4zm-2-2v-4H4v4zm2 0h4v-4h-4zm6 0h4v-4h-4zm0-6h4V4h-4zm-8 8H4q-.825 0-1.412-.587T2 14v-4q0-.825.588-1.412T4 8h10V4q0-.825.588-1.412T16 2h4q.825 0 1.413.588T22 4v10q0 .825-.587 1.413T20 16h-4v4q0 .825-.587 1.413T14 22h-4q-.825 0-1.412-.587T8 20z"></svg:path>`,
})
export class MaterialSymbolsCrosswordOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
