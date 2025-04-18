import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineGridGoldenratioIcon],svg[ic-baseline-grid-goldenratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11V9h-7V2h-2v7h-2V2H9v7H2v2h7v2H2v2h7v7h2v-7h2v7h2v-7h7v-2h-7v-2zm-9 2h-2v-2h2z"></svg:path>`,
})
export class IcBaselineGridGoldenratioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
