import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataTableReferenceIcon],svg[carbon-data-table-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm16 2h4v2h-4zm-4-4h4v2h-4zm4-4h4v2h-4zM8 14h4v2H8z"></svg:path><svg:path fill="currentColor" d="M27 3H5a2.003 2.003 0 0 0-2 2v11h2v-5h22v16H16v2h11a2.003 2.003 0 0 0 2-2V5a2.003 2.003 0 0 0-2-2m0 6H5V5h22Z"></svg:path>`,
})
export class CarbonDataTableReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
