import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSortFilterOutlineIcon],svg[lsicon-sort-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11.454 1.91v11m2.5-1.792l-2.5 2.293l-2.5-2.293M4.5 2v12M7 4.5L4.5 2.207L2 4.5"></svg:path>`,
})
export class LsiconSortFilterOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
