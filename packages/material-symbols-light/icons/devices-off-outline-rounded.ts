import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesOffOutlineRoundedIcon],svg[material-symbols-light-devices-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 6H8.77q-.25 0-.376-.155q-.125-.155-.125-.341t.125-.345T8.77 5H19.5q.213 0 .356.144t.144.357t-.144.356T19.5 6m1.52 3.192v8.154q0 .25-.156.375q-.155.125-.341.125t-.345-.13t-.159-.375V9.385H15.25v2.077q0 .25-.155.375t-.342.125t-.344-.13t-.159-.376V9.192q0-.343.232-.575t.576-.232h5.154q.343 0 .575.232t.232.575M15.058 19q-.344 0-.576-.232t-.232-.576v-2.508L6 7.435V17.5h4.73q.313 0 .532.22t.219.534q0 .313-.219.53q-.219.216-.531.216H3.75q-.312 0-.531-.22T3 18.246t.219-.53t.531-.216H5V6.435L3.12 4.554q-.141-.14-.15-.345q-.01-.203.15-.363q.159-.16.353-.16t.354.16l16.462 16.462q.14.14.15.344t-.15.364t-.355.159t-.353-.16L17.566 19zm2.576-4.213"></svg:path>`,
})
export class MaterialSymbolsLightDevicesOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
