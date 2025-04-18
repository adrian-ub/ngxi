import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilControlsIcon],svg[il-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M463 194H0v-93h463zm278-93v93h-92v81q0 5-3 8t-9 3h-93q-11 0-11-11V20q0-12 11-12h93q5 0 9 3t3 9v81zM0 564h255v93H0zm440 0h301v93H440v81q0 5-3 8t-8 4h-93q-5 0-8-4t-4-8V483q0-5 4-8t8-3h93q11 0 11 11zM232 333h509v92H232zM46 425H0v-92h46v-82q0-11 12-11h93q11 0 11 11v255q0 12-11 12H58q-12 0-12-12z"></svg:path>`,
})
export class IlControlsIcon {
  readonly viewBox = input("0 0 750 850")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
