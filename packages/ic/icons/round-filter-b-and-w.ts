import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterBAndWIcon],svg[ic-round-filter-b-and-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16l-7-8v8H5l7-8V5h6c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundFilterBAndWIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
