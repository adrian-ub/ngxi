import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPlayDisabledIcon],svg[ic-sharp-play-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.45 13.62L19 12L8 5v.17zM2.81 2.81L1.39 4.22L8 10.83V19l4.99-3.18l6.79 6.79l1.41-1.42z"></svg:path>`,
})
export class IcSharpPlayDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
