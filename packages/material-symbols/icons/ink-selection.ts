import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkSelectionIcon],svg[material-symbols-ink-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21V11h10v2h-6.6l6.6 6.6l-1.4 1.4l-6.6-6.6V21zm-4 0v-2h2v2zM5 5H3q0-.825.588-1.412T5 3zm2 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3q.825 0 1.413.588T21 5zM5 19v2q-.825 0-1.412-.587T3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm16 0V7h2v2z"></svg:path>`,
})
export class MaterialSymbolsInkSelectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
