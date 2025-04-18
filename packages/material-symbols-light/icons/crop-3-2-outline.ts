import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCrop32OutlineIcon],svg[material-symbols-light-crop-3-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 17q-.691 0-1.153-.462T4 15.385v-6.77q0-.69.463-1.152T5.616 7h12.769q.69 0 1.153.463T20 8.616v6.769q0 .69-.462 1.153T18.384 17zm0-1h12.769q.23 0 .423-.192t.192-.423v-6.77q0-.23-.192-.423T18.384 8H5.616q-.231 0-.424.192T5 8.616v6.769q0 .23.192.423t.423.192M5 16V8z"></svg:path>`,
})
export class MaterialSymbolsLightCrop32OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
