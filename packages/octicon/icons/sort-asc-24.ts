import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconSortAsc24Icon],svg[octicon-sort-asc-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 17.25a.75.75 0 0 1-1.5 0V7.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L18.5 7.56zm-15.75.25a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5z"></svg:path>`,
})
export class OcticonSortAsc24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
