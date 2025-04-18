import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroid5Icon],svg[material-symbols-light-battery-android-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16.75h3.923q.27 0 .443-.173t.173-.442v-8.27q0-.269-.174-.442q-.173-.173-.442-.173H14zm-9.385 1q-.69 0-1.153-.462T3 16.134V7.866q0-.691.463-1.153t1.152-.463h13.308q.69 0 1.153.463t.462 1.153V10h.346q.452 0 .784.332t.332.784v1.769q0 .477-.332.796t-.783.319h-.346v2.135q0 .69-.463 1.152t-1.153.463z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroid5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
