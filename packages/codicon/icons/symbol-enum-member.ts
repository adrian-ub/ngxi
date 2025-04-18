import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSymbolEnumMemberIcon],svg[codicon-symbol-enum-member-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7 3l1-1h6l1 1v5l-1 1h-4V8h4V3H8v3H7zm2 6V8L8 7H2L1 8v5l1 1h6l1-1zM8 8v5H2V8zm1.414-1L9 6.586V6h4v1zM9 4h4v1H9zm-2 6H3v1h4z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconSymbolEnumMemberIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
