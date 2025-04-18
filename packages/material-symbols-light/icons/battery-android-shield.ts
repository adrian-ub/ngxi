import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidShieldIcon],svg[material-symbols-light-battery-android-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.27q1.348-.859 2.021-2.282q.673-1.425.787-3.011q-.76-.2-1.442-.54T11 8.731q-.684.367-1.366.707t-1.442.539q.114 1.587.777 3.03T11 15.269m0-1.058V9.77q.439.27.899.479q.46.21.943.398q-.188 1.021-.643 1.936T11 14.212M4.616 17.75q-.691 0-1.153-.462T3 16.134V7.866q0-.691.463-1.153t1.152-.463h13.308q.69 0 1.153.463t.462 1.153V10h.346q.452 0 .784.332t.332.784v1.769q0 .477-.332.796t-.783.319h-.346v2.135q0 .69-.463 1.152t-1.153.463z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
