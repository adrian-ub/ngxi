import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidBarcodeIcon],svg[fa6-solid-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 32C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24zm88 0c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16m72 0c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24zm96 0c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24zm168 24v400c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24m-64-8v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16"></svg:path>`,
})
export class Fa6SolidBarcodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
