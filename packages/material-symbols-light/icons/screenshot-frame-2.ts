import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenshotFrame2Icon],svg[material-symbols-light-screenshot-frame-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V7.616q0-.231-.192-.424T19.385 7H17V6h2.385q.69 0 1.152.463T21 7.616V10zM3 10V7.616q0-.691.463-1.153T4.615 6H7v1H4.616q-.231 0-.424.192T4 7.616V10zm14 8v-1h2.385q.23 0 .423-.192t.192-.424V14h1v2.385q0 .69-.462 1.152T19.385 18zM4.615 18q-.69 0-1.153-.462T3 16.384V14h1v2.385q0 .23.192.423t.423.192H7v1z"></svg:path>`,
})
export class MaterialSymbolsLightScreenshotFrame2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
