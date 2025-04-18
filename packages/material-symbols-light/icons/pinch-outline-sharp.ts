import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPinchOutlineSharpIcon],svg[material-symbols-light-pinch-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.27 6.616V3.742L3.741 10.27h2.874v.885H2.23V6.769h.885v2.873l6.526-6.526H6.77V2.23h4.385v4.384zm2.767 15.153l-5.668-5.653l.922-.895l3.44.858v-8.81h1v10.152l-3.637-.982l4.35 4.33h6.787v-7h1v8zm1.52-6.5v-4.5h1v4.5zm2.847 0v-3.5h1v3.5zm-.962 2.635"></svg:path>`,
})
export class MaterialSymbolsLightPinchOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
