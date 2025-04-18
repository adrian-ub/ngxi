import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidShareIcon],svg[material-symbols-light-battery-android-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 17.75q-.691 0-1.153-.462T3 16.134V7.866q0-.691.463-1.153t1.152-.463h13.308q.69 0 1.153.463t.462 1.153V10h.346q.452 0 .784.332t.332.784v1.769q0 .477-.332.796t-.783.319h-.346v2.135q0 .69-.463 1.152t-1.153.463zm1.884-2.5h1v-2.384q0-.27.173-.443t.443-.173h5.27l-1.6 1.575l.714.713l2.788-2.788L12.5 8.961l-.708.689l1.595 1.6H8.116q-.691 0-1.153.463T6.5 12.866z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
