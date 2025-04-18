import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBlurMediumIcon],svg[material-symbols-blur-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17H7v-2h4q-.35-.425-.562-.937T10.1 13H4.5v-2h5.6q.125-.55.338-1.062T11 9H4V7h11q2.075 0 3.538 1.463T20 12t-1.463 3.538T15 17m0-2q1.25 0 2.125-.875T18 12t-.875-2.125T15 9t-2.125.875T12 12t.875 2.125T15 15M4 17v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsBlurMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
