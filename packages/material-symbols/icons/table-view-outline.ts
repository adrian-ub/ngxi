import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableViewOutlineIcon],svg[material-symbols-table-view-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22q-.825 0-1.412-.587T6 20V8q0-.825.588-1.412T8 6h12q.825 0 1.413.588T22 8v12q0 .825-.587 1.413T20 22zm0-2h5v-3H8zm7 0h5v-3h-5zM2 18V4q0-.825.588-1.412T4 2h14v2H4v14zm6-3h5v-3H8zm7 0h5v-3h-5zm-7-5h12V8H8z"></svg:path>`,
})
export class MaterialSymbolsTableViewOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
