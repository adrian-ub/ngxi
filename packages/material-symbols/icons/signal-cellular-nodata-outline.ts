import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularNodataOutlineIcon],svg[material-symbols-signal-cellular-nodata-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.9 21.5l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.075 2.1l2.075 2.1l-1.4 1.4l-2.1-2.075zM2 22L22 2.025V12.7q-.45-.275-.95-.437T20 12V6.85L6.825 20h6.425q.2.575.5 1.075t.675.925zm4.825-2L20 6.85q-1.9 1.9-3.45 3.438t-3.037 3.024L10.425 16.4z"></svg:path>`,
})
export class MaterialSymbolsSignalCellularNodataOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
