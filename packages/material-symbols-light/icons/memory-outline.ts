import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMemoryOutlineIcon],svg[material-symbols-light-memory-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14v-4h4v4zm1-1h2v-2h-2zm-1.5 6.539V18H7.616q-.691 0-1.153-.462T6 16.384V14.5H4.462v-1H6v-3H4.462v-1H6V7.616q0-.691.463-1.153T7.616 6H9.5V4.462h1V6h3V4.462h1V6h1.885q.69 0 1.152.463T18 7.616V9.5h1.539v1H18v3h1.539v1H18v1.885q0 .69-.462 1.152T16.384 18H14.5v1.539h-1V18h-3v1.539zM16.384 17q.231 0 .424-.192t.192-.424V7.616q0-.231-.192-.424T16.384 7H7.616q-.231 0-.424.192T7 7.616v8.769q0 .23.192.423t.423.192zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightMemoryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
