import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineForestIcon],svg[ic-outline-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 18l-3.86-6H22L15 2l-3 4.29L9 2L2 12h1.86L0 18h7v4h4v-4h2v4h4v-4zM15 5.49L18.16 10h-1.68l3.86 6h-3.62l-2.57-4H16l-2.78-3.97zM3.66 16l3.86-6H5.84L9 5.49L12.16 10h-1.68l3.86 6z"></svg:path>`,
})
export class IcOutlineForestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
