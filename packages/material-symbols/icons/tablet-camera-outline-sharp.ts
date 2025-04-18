import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabletCameraOutlineSharpIcon],svg[material-symbols-tablet-camera-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V4h22v16h-5V6H6v14zm2-2h1V6H3zm17 0h1V6h-1zM7.5 22v-7H10l1-1h2l1 1h2.5v7zm4.5-1.75q.725 0 1.238-.513t.512-1.237t-.513-1.237T12 16.75t-1.237.513t-.513 1.237t.513 1.238T12 20.25M3 6h1zm17 0h1z"></svg:path>`,
})
export class MaterialSymbolsTabletCameraOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
