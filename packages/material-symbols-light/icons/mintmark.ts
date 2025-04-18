import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMintmarkIcon],svg[material-symbols-light-mintmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.385 20.5v-1h5.292l-5.292-5.292v-1.416l6 6V13.5h1v7zm-6.77-4v-1h-3v-1H9q.23 0 .423-.192t.193-.423v-2.77q0-.23-.193-.423Q9.231 10.5 9 10.5H5.23q-.69 0-1.152-.462t-.462-1.154V6.116q0-.691.462-1.153T5.231 4.5h1.385v-1h1v1h3v1H5.23q-.231 0-.423.192t-.192.423v2.77q0 .23.192.423t.423.192H9q.69 0 1.153.463t.463 1.153v2.769q0 .69-.463 1.153T9 15.5H7.616v1z"></svg:path>`,
})
export class MaterialSymbolsLightMintmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
