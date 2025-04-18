import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSlabSerifOutlineSharpIcon],svg[material-symbols-light-slab-serif-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.942 18h4.574v-.942H8.033l1.16-3h5.446l1.153 3H13.36V18h4.698v-.942h-1.154L12.566 6h-1.222L7 17.058H5.942zm3.606-4.856l2.335-5.963h.098l2.296 5.963zM3 21V3h18v18zm1-1h16V4H4zm0 0V4z"></svg:path>`,
})
export class MaterialSymbolsLightSlabSerifOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
