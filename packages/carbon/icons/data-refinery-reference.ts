import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataRefineryReferenceIcon],svg[carbon-data-refinery-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm24-8h-6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6V4z"></svg:path><svg:path fill="currentColor" d="M24 26h-8v-2h8v-7H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10v2H8v7h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonDataRefineryReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
