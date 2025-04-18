import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChromeReaderModeRoundedIcon],svg[material-symbols-light-chrome-reader-mode-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm7.884-1h6.885q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H12.5zm5.98-3.308q.193 0 .318-.125t.125-.316t-.125-.317t-.317-.126h-4.462q-.192 0-.317.125t-.125.316t.125.317t.317.126zm0-2.5q.193 0 .318-.125t.125-.316t-.125-.317t-.317-.126h-4.462q-.192 0-.317.125t-.125.316t.125.317t.317.126zm0-2.5q.193 0 .318-.125t.125-.316t-.125-.317t-.317-.126h-4.462q-.192 0-.317.125t-.125.316t.125.317t.317.126z"></svg:path>`,
})
export class MaterialSymbolsLightChromeReaderModeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
