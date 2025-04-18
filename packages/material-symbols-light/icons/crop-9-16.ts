import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCrop916Icon],svg[material-symbols-light-crop-9-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.616 20q-.691 0-1.153-.462T8 18.384V5.616q0-.691.463-1.153T9.616 4h4.769q.69 0 1.153.463T16 5.616v12.769q0 .69-.462 1.153T14.385 20z"></svg:path>`,
})
export class MaterialSymbolsLightCrop916Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
