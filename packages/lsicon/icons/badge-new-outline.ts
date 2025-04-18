import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBadgeNewOutlineIcon],svg[lsicon-badge-new-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#lsiconBadgeNewOutline0)"><svg:path stroke="currentColor" d="M9 6.5H7V8m0 0h1.6M7 8v1.5h2m-5.5.5V6m2 0v4M4 6c0 .5 1 3.5 1 4m5-4v3.5m0 0v.5m0-.5c0-.925.653-1.844 1.153-1.844S12.5 8.575 12.5 9.5m0-3.5v3.5m0 0v.5M8 1l1.903 1.141l2.211.196l.87 2.042l1.673 1.458L14.16 8l.497 2.163l-1.674 1.458l-.869 2.042l-2.21.195L8 15l-1.904-1.142l-2.21-.195l-.87-2.042l-1.673-1.458L1.84 8l-.497-2.163l1.673-1.458l.87-2.042l2.21-.196z"></svg:path></svg:g><svg:defs><svg:clippath id="lsiconBadgeNewOutline0"><svg:path fill="#fff" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class LsiconBadgeNewOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
