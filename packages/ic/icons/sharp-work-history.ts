import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWorkHistoryIcon],svg[ic-sharp-work-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.66 11.13c2-.37 3.88.11 5.34 1.13V6h-6V2H8v4H2v15h9.68a7 7 0 0 1-.52-4.51c.59-2.7 2.78-4.86 5.5-5.36M10 4h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85z"></svg:path>`,
})
export class IcSharpWorkHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
