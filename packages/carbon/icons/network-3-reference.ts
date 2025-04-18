import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNetwork3ReferenceIcon],svg[carbon-network-3-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm26 10h-8v-8h8zm-6-2h4v-4h-4zm-4-8h-8v-8h8zm-6-2h4v-4h-4z"></svg:path><svg:path fill="currentColor" d="M24 17h-2v-2h2a4 4 0 0 0 0-8H12V5h12a6 6 0 0 1 0 12m-14-7H2V2h8zM4 8h4V4H4z"></svg:path>`,
})
export class CarbonNetwork3ReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
