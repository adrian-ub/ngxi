import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSortListAltIcon],svg[lets-icons-sort-list-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5 8v8"></svg:path><svg:path fill="currentColor" d="m5.208 2.312l2.963 4.444A.8.8 0 0 1 7.505 8h-5.01a.8.8 0 0 1-.666-1.244l2.963-4.444a.25.25 0 0 1 .416 0m0 19.376l2.963-4.444A.8.8 0 0 0 7.505 16h-5.01a.8.8 0 0 0-.666 1.244l2.963 4.444a.25.25 0 0 0 .416 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11 7h8m-8 5h8m-8 5h8"></svg:path></svg:g>`,
})
export class LetsIconsSortListAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
