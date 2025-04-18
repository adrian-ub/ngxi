import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSendAnywhereIcon],svg[arcticons-send-anywhere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.284 15.973a6.674 6.674 0 0 1 6.689-6.689h16.054M9.284 34.703v-18.73m6.689-6.689h22.743m0 22.743a6.674 6.674 0 0 1-6.689 6.689H15.973m22.743-25.419v18.73m-6.689 6.689H9.284m10.034-17.392v5.352M34.932 5.5l3.784 3.784M13.068 42.5l-3.784-3.784m19.398-17.392v5.352"></svg:path>`,
})
export class ArcticonsSendAnywhereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
