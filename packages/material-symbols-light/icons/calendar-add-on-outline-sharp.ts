import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarAddOnOutlineSharpIcon],svg[material-symbols-light-calendar-add-on-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4 19V5h3.385V2.77h1.077V5h5.153V2.77h1V5H18v7.33q-.25-.016-.5-.016t-.5.017v-1.715H5V18h7.289q0 .25.017.5t.063.5zm1-9.385h12V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarAddOnOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
