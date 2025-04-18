import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStraightenIcon],svg[material-symbols-straighten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.825 0-1.412-.587T2 16V8q0-.825.588-1.412T4 6h3v6h2V6h2v6h2V6h2v6h2V6h3q.825 0 1.413.588T22 8v8q0 .825-.587 1.413T20 18z"></svg:path>`,
})
export class MaterialSymbolsStraightenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
