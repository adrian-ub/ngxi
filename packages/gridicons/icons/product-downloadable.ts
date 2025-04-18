import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsProductDownloadableIcon],svg[gridicons-product-downloadable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2v6h1v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9h1zM4 5h16v2H4zm15 15H5V9h14zm-6-10v5.17l2.59-2.58L17 14l-5 5l-5-5l1.41-1.42L11 15.17V10z"></svg:path>`,
})
export class GridiconsProductDownloadableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
