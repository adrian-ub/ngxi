import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileCopyOffOutlineIcon],svg[material-symbols-light-file-copy-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 17.246l-1-1V7h-4V3H8.616q-.231 0-.424.192T8 3.616v1.496l-1-1v-.496q0-.691.463-1.153T8.616 2H15.5L20 6.5zM8.616 17h6.969L8 9.416v6.969q0 .23.192.423t.423.192m12.039 5.07L16.584 18H8.617q-.691 0-1.153-.462T7 16.384V8.415L1.93 3.347l.708-.708l18.723 18.723zM4.616 22q-.691 0-1.153-.462T3 20.385V9h1v11.385q0 .23.192.423t.423.192H15v1z"></svg:path>`,
})
export class MaterialSymbolsLightFileCopyOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
