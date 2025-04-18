import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDataTableOutlineIcon],svg[material-symbols-data-table-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM5 8.325h14V5H5zm0 5.35h14v-3.35H5zM5 19h14v-3.325H5zM6 7.65v-2h2v2zM6 13v-2h2v2zm0 5.35v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsDataTableOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
