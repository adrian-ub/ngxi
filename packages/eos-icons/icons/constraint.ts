import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsConstraintIcon],svg[eos-icons-constraint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-1.5a2.5 2.5 0 0 0-5 0V15a1.075 1.075 0 0 0-1 1v4a1.075 1.075 0 0 0 1 1h5a1.075 1.075 0 0 0 1-1v-4a1.075 1.075 0 0 0-1-1m-1 0h-3v-1.5a1.5 1.5 0 0 1 3 0Zm2-10H2V3h20Zm0 4H2V7h20Zm-9 4H2v-2h11Zm0 4H2v-2h11Zm0 4H2v-2h11Z"></svg:path>`,
})
export class EosIconsConstraintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
