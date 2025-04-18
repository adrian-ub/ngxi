import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiQrcodeRemoveIcon],svg[mdi-qrcode-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v2H5zM1 1h10v10H1zm2 2v6h6V3zm2 14h2v2H5zm-4-4h10v10H1zm2 2v6h6v-6zm10-2h4v2h2v-2h4v2h-4v2h4v6h-4v-2h-4v2h-2v-2h2v-2h-2zm8 8v-2h-2v2zm-2-4h-2v-2h-2v4h4zM15.17 1.76l-1.41 1.41L16.59 6l-2.83 2.83l1.41 1.41L18 7.41l2.83 2.83l1.41-1.41L19.41 6l2.83-2.83l-1.41-1.41L18 4.59z"></svg:path>`,
})
export class MdiQrcodeRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
