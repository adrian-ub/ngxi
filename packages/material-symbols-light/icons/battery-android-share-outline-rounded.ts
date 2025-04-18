import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidShareOutlineRoundedIcon],svg[material-symbols-light-battery-android-share-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.387 12.25l-1.24 1.221q-.166.14-.166.341t.165.367q.166.165.357.165t.357-.165l1.863-1.863q.243-.243.243-.566t-.243-.565l-1.888-1.889q-.14-.14-.342-.143q-.2-.003-.347.143q-.16.14-.153.351t.148.357l1.246 1.246H8.116q-.691 0-1.153.463T6.5 12.866v1.884q0 .214.143.357T7 15.25t.357-.143t.143-.357v-1.884q0-.27.173-.443t.443-.173zm-8.771 4.5h13.307q.27 0 .443-.173t.173-.442v-8.27q0-.269-.174-.442q-.173-.173-.442-.173H4.616q-.27 0-.443.173T4 7.866v8.269q0 .269.173.442t.443.173m0 1q-.691 0-1.153-.462T3 16.134V7.866q0-.691.463-1.153t1.152-.463h13.308q.69 0 1.153.463t.462 1.153V10h.346q.452 0 .784.332t.332.784v1.769q0 .477-.332.796t-.783.319h-.346v2.135q0 .69-.463 1.152t-1.153.463zm-.616-1v-9.5z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidShareOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
