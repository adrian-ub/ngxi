import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTrailLengthShortOutlineIcon],svg[material-symbols-trail-length-short-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17q-1.825 0-3.187-1.137T10.1 13H4v-2h6.1q.125-.575.338-1.075T11 9H6V7h9q2.075 0 3.538 1.463T20 12t-1.463 3.538T15 17m0-2q1.25 0 2.125-.875T18 12t-.875-2.125T15 9t-2.125.875T12 12t.875 2.125T15 15m-8 2v-2h3v2zm8-5"></svg:path>`,
})
export class MaterialSymbolsTrailLengthShortOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
