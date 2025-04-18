import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidQuestionOutlineRoundedIcon],svg[material-symbols-light-battery-android-question-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.366q.287 0 .483-.197q.196-.196.196-.482t-.196-.486t-.483-.199t-.486.199t-.198.486t.198.482t.486.197m.064-5.989q.386 0 .645.225q.258.225.258.617q0 .327-.183.577q-.182.25-.486.543q-.327.32-.476.652t-.199.724q-.025.148.087.25t.26.127q.172.025.3-.089q.126-.115.157-.288q.05-.275.146-.497t.314-.44q.401-.376.64-.758t.239-.84q0-.726-.482-1.136q-.48-.41-1.226-.41q-.574 0-.977.24t-.666.707q-.061.136-.018.278t.186.204q.142.087.322.028t.272-.2q.175-.245.39-.38q.216-.134.496-.134M4.615 16.75h13.308q.27 0 .443-.173q.172-.173.172-.442v-8.27q0-.269-.173-.442t-.442-.173H4.616q-.27 0-.443.173T4 7.866v8.269q0 .269.173.442t.443.173m0 1q-.691 0-1.153-.462T3 16.134V7.866q0-.691.463-1.153t1.152-.463h13.308q.69 0 1.153.463t.462 1.153V10h.346q.452 0 .784.332t.332.784v1.769q0 .477-.332.796t-.783.319h-.346v2.135q0 .69-.463 1.152t-1.153.463zm-.616-1v-9.5z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidQuestionOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
