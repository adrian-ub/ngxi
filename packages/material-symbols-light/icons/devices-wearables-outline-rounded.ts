import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesWearablesOutlineRoundedIcon],svg[material-symbols-light-devices-wearables-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.423 5.5h8v-.885q0-.23-.192-.423T11.808 4h-6.77q-.23 0-.423.192t-.192.423zM5.039 21q-.691 0-1.153-.462t-.463-1.153V4.615q0-.69.463-1.152T5.045 3H11.8q.697 0 1.16.463t.462 1.153v3.567q0 .204-.144.342t-.357.138t-.356-.143t-.143-.357V6.5h-8v11h5.96q.212 0 .356.142q.144.14.144.35q0 .196-.144.352t-.356.156h-5.96v.885q0 .23.193.423q.192.192.423.192h7.552q.212 0 .356.144t.143.357t-.143.356t-.357.143zm11.884-3q1.508 0 2.562-1.054t1.054-2.562t-1.055-2.561q-1.053-1.054-2.561-1.054q-1.507 0-2.561 1.054t-1.054 2.562t1.054 2.561T16.923 18m-1.2 3q-.34 0-.57-.232q-.23-.233-.23-.576v-1.638q-1.177-.56-1.896-1.672t-.72-2.502t.72-2.497t1.896-1.668V8.577q0-.343.23-.576t.57-.232h2.4q.34 0 .57.232t.23.576v1.638q1.177.56 1.896 1.672t.72 2.502t-.72 2.498t-1.896 1.667v1.638q0 .344-.23.576t-.57.232zm-11.3-2.5V20zm0-13V4z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesWearablesOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
