import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmSwapHorizontalIcon],svg[charm-swap-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.75 8.25l-3 3l3 3m7.5-3H2.75m7.5-9.5l3 3l-3 3m-7.5-3h10.5"></svg:path>`,
})
export class CharmSwapHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
