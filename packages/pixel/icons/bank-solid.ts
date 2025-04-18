import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBankSolidIcon],svg[pixel-bank-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20v2h-1v1H2v-1H1v-2h2v-1h1v-9h2v9h2v-9h2v9h4v-9h2v9h2v-9h2v9h1v1zM20 5V4h-2V3h-2V2h-2V1h-4v1H8v1H6v1H4v1H1v2h1v1h1v1h18V8h1V7h1V5zm-9 2V6h-1V4h1V3h2v1h1v2h-1v1z"></svg:path>`,
})
export class PixelBankSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
