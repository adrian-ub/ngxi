import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsAugmentedRealityIcon],svg[eos-icons-augmented-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3.311L19 7.653v8.694l-7.5 4.342L4 16.347V7.653zM11.5 1L2 6.5v11l9.5 5.5l9.5-5.5v-11z"></svg:path><svg:path fill="currentColor" d="M11.5 5a.5.5 0 1 0 .5.5a.5.5 0 0 0-.5-.5m0 3.5a.5.5 0 1 0 .5.5a.5.5 0 0 0-.5-.5m0 3.5a.5.5 0 1 0 .5.5a.5.5 0 0 0-.5-.5M8 13a.5.5 0 1 0 .422.231A.5.5 0 0 0 8 13m-2.5 2a.5.5 0 1 0 .421.231a.5.5 0 0 0-.422-.23M15 13a.5.5 0 1 0 .269.079a.5.5 0 0 0-.269-.08M17.535 15a.5.5 0 1 0 .269.079a.5.5 0 0 0-.269-.079M3.382 6.225l-1 1.732l7.027 4.057l1-1.732zM12.5 17.016h-2v5.141h2z"></svg:path>`,
})
export class EosIconsAugmentedRealityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
