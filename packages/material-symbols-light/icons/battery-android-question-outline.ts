import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidQuestionOutlineIcon],svg[material-symbols-light-battery-android-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.366q.287 0 .483-.197q.196-.196.196-.482t-.196-.486t-.483-.199t-.486.199t-.198.486t.198.482t.486.197m-.402-2.28h.804q0-.407.1-.715q.1-.307.385-.592q.402-.377.64-.756q.239-.379.239-.842q0-.721-.481-1.134t-1.227-.413q-.666 0-1.1.327q-.435.326-.685.935l.737.31q.163-.387.425-.608q.261-.221.629-.221q.386 0 .645.234q.258.233.258.626q0 .327-.182.568q-.183.241-.487.534q-.394.382-.547.796q-.153.413-.153.952M4.615 16.75h13.308q.27 0 .443-.173q.172-.173.172-.442v-8.27q0-.269-.173-.442t-.442-.173H4.616q-.27 0-.443.173T4 7.866v8.269q0 .269.173.442t.443.173m0 1q-.691 0-1.153-.462T3 16.134V7.866q0-.691.463-1.153t1.152-.463h13.308q.69 0 1.153.463t.462 1.153V10h.346q.452 0 .784.332t.332.784v1.769q0 .477-.332.796t-.783.319h-.346v2.135q0 .69-.463 1.152t-1.153.463zm-.616-1v-9.5z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
