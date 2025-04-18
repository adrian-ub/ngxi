import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTripIcon],svg[material-symbols-trip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21V6h2q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zM10 6h4V4h-4zM8 21V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v17zm-4 0q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h2v15z"></svg:path>`,
})
export class MaterialSymbolsTripIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
