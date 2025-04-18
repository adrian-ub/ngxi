import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockMediaOutlineIcon],svg[material-symbols-stock-media-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15q-.825 0-1.412-.587T2 13V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v9q0 .825-.587 1.413T13 15zm0-2h9V4H4zm4-1.75L6.8 9.6L5 12h7L9.7 9zM17 22q-1.25 0-2.125-.875T14 19t.875-2.125T17 16q.275 0 .513.05t.487.125V11h4v2h-2v6q0 1.25-.875 2.125T17 22M4 13V4z"></svg:path>`,
})
export class MaterialSymbolsStockMediaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
