import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHouseSidingIcon],svg[material-symbols-light-house-siding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.692 20V9.946L2.604 12.25L2 11.458L12 4l10.02 7.458l-.604.792l-3.089-2.304V20h-1v-3H6.692v3zm1-7.77h10.635V9.462H6.692zm0 3.77h10.635v-2.77H6.692zm.981-7.539h8.654L12 5.256z"></svg:path>`,
})
export class MaterialSymbolsLightHouseSidingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
