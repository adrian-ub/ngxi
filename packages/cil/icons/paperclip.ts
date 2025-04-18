import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilPaperclipIcon],svg[cil-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.456 472a136 136 0 0 1-96.167-232.166l196.6-196.6l22.631 22.623l-196.6 196.6A104 104 0 0 0 227 409.539l207.912-207.917A72 72 0 0 0 333.088 99.8L125.171 307.716a40 40 0 1 0 56.568 56.568l179.634-179.632L384 207.279L204.367 386.911a72 72 0 1 1-101.823-101.822L310.461 77.172a104 104 0 1 1 147.078 147.077L249.622 432.166A135.1 135.1 0 0 1 153.456 472"></svg:path>`,
})
export class CilPaperclipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
