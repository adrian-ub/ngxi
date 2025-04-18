import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCrop54OutlineIcon],svg[material-symbols-light-crop-5-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 19q-.691 0-1.153-.462T4 17.384V6.616q0-.691.463-1.153T5.616 5h12.769q.69 0 1.153.463T20 6.616v10.769q0 .69-.462 1.153T18.384 19zm0-1h12.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T18.384 6H5.616q-.231 0-.424.192T5 6.616v10.769q0 .23.192.423t.423.192M5 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightCrop54OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
