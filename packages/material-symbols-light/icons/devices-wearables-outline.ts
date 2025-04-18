import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesWearablesOutlineIcon],svg[material-symbols-light-devices-wearables-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.423 5.5h8v-.885q0-.23-.192-.423T11.808 4h-6.77q-.23 0-.423.192t-.192.423zM5.039 21q-.691 0-1.153-.462t-.463-1.153V4.615q0-.69.463-1.152T5.038 3h6.77q.69 0 1.152.463t.463 1.153v3.696q-.287.165-.527.341t-.473.382V6.5h-8v11h6.252q.123.28.27.521q.147.24.324.479H4.423v.885q0 .23.193.423q.192.192.423.192h7.653v-.092q.087.098.185.178q.098.081.213.145q-.217.353-.568.561q-.35.208-.81.208zm11.884-3q1.508 0 2.562-1.054t1.054-2.562t-1.055-2.561q-1.053-1.054-2.561-1.054q-1.507 0-2.561 1.054t-1.054 2.562t1.054 2.561T16.923 18m-2 3v-2.446q-1.177-.56-1.896-1.667t-.72-2.502t.72-2.502t1.896-1.667V7.769h4v2.447q1.177.559 1.896 1.667t.72 2.502t-.72 2.502t-1.896 1.667V21zm-10.5-2.5V20zm0-13V4z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesWearablesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
