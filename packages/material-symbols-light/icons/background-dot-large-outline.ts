import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackgroundDotLargeOutlineIcon],svg[material-symbols-light-background-dot-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.077 15.846q.385 0 .654-.269t.269-.654t-.27-.654T9.078 14t-.654.27t-.27.653t.27.654t.654.27m0-5.847q.385 0 .654-.27T10 9.078t-.27-.654t-.653-.27t-.654.27t-.27.654t.27.654t.654.269m5.846 5.846q.385 0 .654-.269t.27-.654t-.27-.654t-.654-.269t-.654.27t-.269.653t.27.654t.653.27m0-5.847q.385 0 .654-.27t.27-.653t-.27-.654t-.654-.27t-.654.27t-.269.654t.27.654t.653.269M5.615 20q-.69 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.77q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightBackgroundDotLargeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
