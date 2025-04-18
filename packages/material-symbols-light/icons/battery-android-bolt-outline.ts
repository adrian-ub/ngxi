import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidBoltOutlineIcon],svg[material-symbols-light-battery-android-bolt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.942 15.173h.424l3.807-3.808h-2.675l.56-2.538h-.423l-3.808 3.807h2.675zM4.616 16.75h13.307q.27 0 .443-.173q.172-.173.172-.442v-8.27q0-.269-.173-.442t-.442-.173H4.616q-.27 0-.443.173T4 7.866v8.269q0 .269.173.442t.443.173m0 1q-.691 0-1.153-.462T3 16.134V7.866q0-.691.463-1.153t1.152-.463h13.308q.69 0 1.153.463t.462 1.153V10h.346q.452 0 .784.332t.332.784v1.769q0 .477-.332.796t-.783.319h-.346v2.135q0 .69-.463 1.152t-1.153.463zm-.616-1v-9.5z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidBoltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
