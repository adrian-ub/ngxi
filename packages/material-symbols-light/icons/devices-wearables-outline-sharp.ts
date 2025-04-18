import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesWearablesOutlineSharpIcon],svg[material-symbols-light-devices-wearables-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.423 5.5h8V4h-8zm-1 15.5V3h10v5.312q-.287.165-.527.341t-.473.382V6.5h-8v11h6.252q.123.28.27.521q.147.24.324.479H4.423V20h8.27v-.092q.086.098.184.178q.098.081.213.145V21zm13.5-3q1.508 0 2.562-1.054t1.054-2.562t-1.055-2.561q-1.053-1.054-2.561-1.054q-1.507 0-2.561 1.054t-1.054 2.562t1.054 2.561T16.923 18m-2 3v-2.446q-1.177-.56-1.896-1.672t-.72-2.502t.72-2.497t1.896-1.668V7.77h4v2.446q1.177.56 1.896 1.672t.72 2.502t-.72 2.498t-1.896 1.667V21zm-10.5-2.5V20zm0-13V4z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesWearablesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
