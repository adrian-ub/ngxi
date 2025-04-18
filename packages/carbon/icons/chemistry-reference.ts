import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChemistryReferenceIcon],svg[carbon-chemistry-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8z"></svg:path><svg:path fill="currentColor" d="M20 13.67V4h2V2H10v2h2v9.67L9.58 17h2.477L14 14.33V4h4v10.33l7.61 10.46a2.013 2.013 0 0 1-.44 2.82a2.04 2.04 0 0 1-1.19.39H15v2h8.98a4.015 4.015 0 0 0 3.25-6.38Z"></svg:path>`,
})
export class CarbonChemistryReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
