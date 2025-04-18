import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextPlusOutlineIcon],svg[mdi-receipt-text-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3zm-4.74 5.74L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v11.35c-.63-.22-1.3-.35-2-.35V5H5v14h8c0 .57.1 1.22.26 1.74M14.54 15c-.54.58-.93 1.25-1.19 2H6v-2zM6 11h12v2H6zm0-4h12v2H6z"></svg:path>`,
})
export class MdiReceiptTextPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
