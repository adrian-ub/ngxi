import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewAgendaOutlineSharpIcon],svg[material-symbols-view-agenda-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-8h18v8zm2-2h14v-4H5zm-2-8V3h18v8zm2-2h14V5H5zm0 6v4zM5 5v4z"></svg:path>`,
})
export class MaterialSymbolsViewAgendaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
