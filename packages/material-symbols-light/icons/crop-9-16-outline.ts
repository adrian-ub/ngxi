import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCrop916OutlineIcon],svg[material-symbols-light-crop-9-16-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.616 20q-.691 0-1.153-.462T8 18.384V5.616q0-.691.463-1.153T9.616 4h4.769q.69 0 1.153.463T16 5.616v12.769q0 .69-.462 1.153T14.385 20zM9 5.616v12.769q0 .23.192.423t.423.192h4.77q.23 0 .423-.192t.192-.423V5.615q0-.23-.192-.423T14.385 5h-4.77q-.23 0-.423.192T9 5.616m0 0V5v14z"></svg:path>`,
})
export class MaterialSymbolsLightCrop916OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
