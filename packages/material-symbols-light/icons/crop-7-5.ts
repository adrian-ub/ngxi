import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCrop75Icon],svg[material-symbols-light-crop-7-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 18q-.691 0-1.153-.462T4 16.384V7.616q0-.691.463-1.153T5.616 6h12.769q.69 0 1.153.463T20 7.616v8.769q0 .69-.462 1.153T18.384 18z"></svg:path>`,
})
export class MaterialSymbolsLightCrop75Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
