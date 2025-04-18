import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRememberMeOutlineSharpIcon],svg[material-symbols-remember-me-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 23V1h14v22zm2-3v1h10v-1zM7 4h10V3H7zm5 12q-1.35 0-2.625.388T7 17.5v.5h10v-.5q-1.1-.725-2.375-1.112T12 16m0-2q1.35 0 2.613.313T17 15.2V6H7v9.2q1.125-.575 2.388-.887T12 14m0-1q1.25 0 2.125-.875T15 10t-.875-2.125T12 7t-2.125.875T9 10t.875 2.125T12 13m0-2q-.425 0-.712-.288T11 10t.288-.712T12 9t.713.288T13 10t-.288.713T12 11m0 7h5H7zm0 2"></svg:path>`,
})
export class MaterialSymbolsRememberMeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
