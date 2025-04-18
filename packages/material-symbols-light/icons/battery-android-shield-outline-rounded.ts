import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidShieldOutlineRoundedIcon],svg[material-symbols-light-battery-android-shield-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15q.206 0 .383-.075t.338-.206q.404-.355.734-.791t.566-.934q.281-.528.446-1.12q.166-.591.266-1.201q.05-.298-.127-.547t-.47-.355q-.473-.18-.925-.402t-.894-.457Q11.156 8.83 11 8.83t-.317.08q-.443.237-.898.458q-.454.222-.922.402q-.292.106-.469.358t-.127.544q.094.61.263 1.201q.168.592.449 1.12q.236.498.566.931t.734.794q.161.131.338.206T11 15m0-.788V9.769q.439.27.899.479q.46.21.943.398q-.188 1.021-.643 1.936T11 14.212M4.616 16.75h13.307q.27 0 .443-.173q.172-.173.172-.442v-8.27q0-.269-.173-.442t-.442-.173H4.616q-.27 0-.443.173T4 7.866v8.269q0 .269.173.442t.443.173m0 1q-.691 0-1.153-.462T3 16.134V7.866q0-.691.463-1.153t1.152-.463h13.308q.69 0 1.153.463t.462 1.153V10h.346q.452 0 .784.332t.332.784v1.769q0 .477-.332.796t-.783.319h-.346v2.135q0 .69-.463 1.152t-1.153.463zm-.616-1v-9.5z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidShieldOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
