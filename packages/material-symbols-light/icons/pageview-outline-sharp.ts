import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPageviewOutlineSharpIcon],svg[material-symbols-light-pageview-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.712 19H3V5h18v14h-2.439l-4.815-4.815q-.467.407-1.031.611Q12.15 15 11.5 15q-1.452 0-2.476-1.024T8 11.5t1.024-2.476T11.5 8t2.476 1.024T15 11.5q0 .54-.117.987t-.467.951L18.977 18H20V6H4v12h10.712zM11.5 14q1.05 0 1.775-.725T14 11.5t-.725-1.775T11.5 9t-1.775.725T9 11.5t.725 1.775T11.5 14M4 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightPageviewOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
