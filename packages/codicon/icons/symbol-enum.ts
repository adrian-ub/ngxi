import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSymbolEnumIcon],svg[codicon-symbol-enum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2H8L7 3v3h1V3h6v5h-4v1h4l1-1V3zM9 6h4v1H9.41L9 6.59zM7 7H2L1 8v5l1 1h6l1-1V8L8 7zm1 6H2V8h6zM3 9h4v1H3zm0 2h4v1H3zm6-7h4v1H9z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconSymbolEnumIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
