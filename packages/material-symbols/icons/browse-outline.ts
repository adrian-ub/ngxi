import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrowseOutlineIcon],svg[material-symbols-browse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13V5q0-.825.588-1.412T5 3h6v10zM13 3h6q.825 0 1.413.588T21 5v4h-8zm0 18V11h8v8q0 .825-.587 1.413T19 21zM3 15h8v6H5q-.825 0-1.412-.587T3 19zm2-4h4V5H5zm10-4h4V5h-4zm0 6v6h4v-6zM5 17v2h4v-2z"></svg:path>`,
})
export class MaterialSymbolsBrowseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
