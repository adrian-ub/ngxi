import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsAlignBaselineIcon],svg[radix-icons-align-baseline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 1.75a.5.5 0 0 1 .47.33l3 8.32a.5.5 0 1 1-.94.34l-.982-2.724H8.952L7.97 10.74a.5.5 0 0 1-.94-.339l3-8.32a.5.5 0 0 1 .47-.33m0 1.974l1.241 3.442H9.26zM2.5 2.1c.22 0 .4.18.4.4v7.034l1.317-1.317a.4.4 0 0 1 .565.566l-2 2a.4.4 0 0 1-.565 0l-2-2a.4.4 0 1 1 .565-.566L2.1 9.534V2.5c0-.22.18-.4.4-.4M.1 13.5a.4.4 0 0 1 .4-.4h14a.4.4 0 1 1 0 .8H.5a.4.4 0 0 1-.4-.4" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsAlignBaselineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
