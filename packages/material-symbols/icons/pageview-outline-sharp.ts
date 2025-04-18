import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPageviewOutlineSharpIcon],svg[material-symbols-pageview-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 20H2V4h20v16h-3.4l-4.7-4.7q-.525.35-1.137.525T11.5 16q-1.875 0-3.187-1.312T7 11.5t1.313-3.187T11.5 7t3.188 1.313T16 11.5q0 .675-.175 1.275T15.3 13.9l4.1 4.1h.6V6H4v12h9.75zm-4.25-6q1.05 0 1.775-.725T14 11.5t-.725-1.775T11.5 9t-1.775.725T9 11.5t.725 1.775T11.5 14M4 18V6z"></svg:path>`,
})
export class MaterialSymbolsPageviewOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
