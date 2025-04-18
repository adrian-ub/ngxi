import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPagelessIcon],svg[material-symbols-pageless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22H3q-.825 0-1.412-.587T1 20v-6h2v6h7zm4 0v-2h7v-6h2v6q0 .825-.587 1.413T21 22zM1 10V4q0-.825.588-1.412T3 2h7v2H3v6zm20 0V4h-7V2h7q.825 0 1.413.588T23 4v6z"></svg:path>`,
})
export class MaterialSymbolsPagelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
