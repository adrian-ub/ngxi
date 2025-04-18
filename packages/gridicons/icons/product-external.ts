import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsProductExternalIcon],svg[gridicons-product-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2v6h1v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9h1zM4 5h16v2H4zm15 15H5V9h14zm-2-9v6h-2v-2.59l-3.29 3.29l-1.41-1.41L13.59 13H11v-2z"></svg:path>`,
})
export class GridiconsProductExternalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
