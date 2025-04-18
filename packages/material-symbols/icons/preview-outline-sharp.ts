import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPreviewOutlineSharpIcon],svg[material-symbols-preview-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-2h14V7H5zm7-2q-2.05 0-3.662-1.112T6 13q.725-1.775 2.338-2.887T12 9t3.663 1.113T18 13q-.725 1.775-2.337 2.888T12 17m0-1.5q1.4 0 2.55-.663T16.35 13q-.65-1.175-1.8-1.838T12 10.5t-2.55.663T7.65 13q.65 1.175 1.8 1.838T12 15.5m0-1q.625 0 1.063-.437T13.5 13t-.437-1.062T12 11.5t-1.062.438T10.5 13t.438 1.063T12 14.5"></svg:path>`,
})
export class MaterialSymbolsPreviewOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
