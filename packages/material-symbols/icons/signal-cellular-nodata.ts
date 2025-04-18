import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularNodataIcon],svg[material-symbols-signal-cellular-nodata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.9 21.5l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.075 2.1l2.075 2.1l-1.4 1.4l-2.1-2.075zM2 22L22 2v10.7q-.675-.4-1.45-.587T19 11.925q-2.525 0-4.3 1.775T12.925 18q0 1.15.375 2.138T14.425 22z"></svg:path>`,
})
export class MaterialSymbolsSignalCellularNodataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
