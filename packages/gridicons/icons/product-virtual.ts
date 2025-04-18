import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsProductVirtualIcon],svg[gridicons-product-virtual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2v6h1v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9h1zM4 5h16v2H4zm15 15H5V9h14zM7 16.45a1.82 1.82 0 0 1 1.82-1.82h.09a2.94 2.94 0 1 1 5.799-.92a2.27 2.27 0 0 1 1.08 4.29H7.87A1.81 1.81 0 0 1 7 16.45"></svg:path>`,
})
export class GridiconsProductVirtualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
