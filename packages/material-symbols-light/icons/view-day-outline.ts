import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewDayOutlineIcon],svg[material-symbols-light-view-day-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18.77v-1h16v1zM4 6.23v-1h16v1zM5.616 15q-.691 0-1.153-.462T4 13.385v-2.77q0-.69.463-1.152T5.616 9h12.769q.69 0 1.153.463T20 10.616v2.769q0 .69-.462 1.153T18.384 15zm0-1h12.769q.23 0 .423-.192t.192-.423v-2.77q0-.23-.192-.423T18.384 10H5.616q-.231 0-.424.192T5 10.616v2.769q0 .23.192.423t.423.192M5 10v4z"></svg:path>`,
})
export class MaterialSymbolsLightViewDayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
