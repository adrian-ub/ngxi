import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileCopyOffIcon],svg[material-symbols-light-file-copy-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17.246L7 4.112v-.497q0-.69.463-1.153T8.616 2H15.5L20 6.5zm.654 4.823L16.584 18H8.617q-.691 0-1.153-.462T7 16.384V8.415L1.93 3.347l.708-.708l18.723 18.723zM15 7h4.154L15 2.846L19.154 7L15 2.846zM4.616 22q-.691 0-1.153-.462T3 20.385V9h1v11.385q0 .23.192.423t.423.192H15v1z"></svg:path>`,
})
export class MaterialSymbolsLightFileCopyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
