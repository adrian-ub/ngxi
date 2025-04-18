import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextCheckOutlineIcon],svg[mdi-receipt-text-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.26 20.74L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v11.35c-.63-.22-1.3-.35-2-.35V5H5v14h8c0 .57.1 1.22.26 1.74M6 15v2h7.35c.26-.75.65-1.42 1.19-2zm0-2h12v-2H6zm0-4h12V7H6zm17 8.23l-1.16-1.41l-3.59 3.59l-1.59-1.59L15.5 19l2.75 3"></svg:path>`,
})
export class MdiReceiptTextCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
