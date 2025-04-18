import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSelectWindowIcon],svg[material-symbols-select-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20v-9q0-.825.588-1.412T4 9h2V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v9q0 .825-.587 1.413T20 15h-2v5q0 .825-.587 1.413T16 22zm0-2h12v-7H4zm14-7h2V6H8v3h8q.825 0 1.413.588T18 11z"></svg:path>`,
})
export class MaterialSymbolsSelectWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
