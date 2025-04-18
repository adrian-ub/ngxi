import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabInactiveIcon],svg[material-symbols-tab-inactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22q-.825 0-1.412-.587T6 20v-2H4q-.825 0-1.412-.587T2 16v-2h2v2h2V8q0-.825.588-1.412T8 6h8V4h-2V2h2q.825 0 1.413.588T18 4v2h2q.825 0 1.413.588T22 8v12q0 .825-.587 1.413T20 22zM2 12V8h2v4zm0-6V4q0-.825.588-1.412T4 2h2v2H4v2zm6-2V2h4v2z"></svg:path>`,
})
export class MaterialSymbolsTabInactiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
