import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBreakfastDiningIcon],svg[ic-sharp-breakfast-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.85 3H6.14C4.15 3 2.36 4.39 2.05 6.36c-.27 1.75.59 3.29 1.95 4.09V21h16V10.45a4 4 0 0 0 1.95-4.11C21.63 4.38 19.83 3 17.85 3m-1.44 10L12 17.42L7.59 13L12 8.59z"></svg:path>`,
})
export class IcSharpBreakfastDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
