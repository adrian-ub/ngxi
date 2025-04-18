import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLeaveBagsAtHomeIcon],svg[ic-sharp-leave-bags-at-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.83 9h.92v.92l1.75 1.75V9H16v4.17l3 3V6h-4V2H9v4h-.17zM11 4h2v2h-2zm10.19 17.19L2.81 2.81L1.39 4.22L5 7.83V21h2c0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1h1.17l1.61 1.61zM8 18v-7.17l1.5 1.5V18zm3.25 0v-3.92l1.5 1.5V18zm3.25 0v-.67l.67.67z"></svg:path>`,
})
export class IcSharpLeaveBagsAtHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
