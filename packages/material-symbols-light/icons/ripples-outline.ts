import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRipplesOutlineIcon],svg[material-symbols-light-ripples-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 19h12.769q.23 0 .423-.192t.192-.424v-8.51q-.45.294-.953.46T17 10.5q-1.458 0-2.479-1.021T13.5 7q0-.544.166-1.047q.167-.503.461-.953H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192m0 1q-.69 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightRipplesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
