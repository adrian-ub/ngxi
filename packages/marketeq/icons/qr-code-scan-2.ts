import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqQrCodeScan2Icon],svg[marketeq-qr-code-scan-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 22.917h-8.334v-8.334h8.334zm12.5-8.334H31.25v4.167h4.167zm-8.334 20.834h8.334v-8.334h-8.334zm-12.5 0h4.167V31.25h-4.167z"></svg:path><svg:path stroke="#306CFE" d="M16.667 6.25H8.333A2.083 2.083 0 0 0 6.25 8.333v8.334m37.5 0V8.333a2.083 2.083 0 0 0-2.083-2.083h-8.334M6.25 33.333v8.334a2.083 2.083 0 0 0 2.083 2.083h8.334m16.666 0h8.334a2.083 2.083 0 0 0 2.083-2.083v-8.334"></svg:path></svg:g>`,
})
export class MarketeqQrCodeScan2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
