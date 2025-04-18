import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQrCodeIcon],svg[hugeicons-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6c0-1.414 0-2.121.44-2.56C3.878 3 4.585 3 6 3s2.121 0 2.56.44C9 3.878 9 4.585 9 6s0 2.121-.44 2.56C8.122 9 7.415 9 6 9s-2.121 0-2.56-.44C3 8.122 3 7.415 3 6m0 12c0-1.414 0-2.121.44-2.56C3.878 15 4.585 15 6 15s2.121 0 2.56.44C9 15.878 9 16.585 9 18s0 2.121-.44 2.56C8.122 21 7.415 21 6 21s-2.121 0-2.56-.44C3 20.122 3 19.415 3 18m0-6h6m3-9v5m3-2c0-1.414 0-2.121.44-2.56C15.878 3 16.585 3 18 3s2.121 0 2.56.44C21 3.878 21 4.585 21 6s0 2.121-.44 2.56C20.122 9 19.415 9 18 9s-2.121 0-2.56-.44C15 8.122 15 7.415 15 6m6 6h-6c-1.414 0-2.121 0-2.56.44C12 12.878 12 13.585 12 15m0 2.77v2.768M15 15v1.5c0 1.446.784 1.5 2 1.5a1 1 0 0 1 1 1m-2 2h-1m3-6c1.414 0 2.121 0 2.56.44s.44 1.148.44 2.564s0 2.125-.44 2.565c-.32.32-.783.408-1.56.431" color="currentColor"></svg:path>`,
})
export class HugeiconsQrCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
