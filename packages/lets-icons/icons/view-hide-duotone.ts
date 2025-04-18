import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsViewHideDuotoneIcon],svg[lets-icons-view-hide-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="letsIconsViewHideDuotone0" fill="currentColor" d="M15.92 12.799Q16 12.41 16 12a4 4 0 0 0-4.799-3.92zM8.667 9.788a4 4 0 0 0 5.545 5.545z"></svg:path></svg:defs><svg:g fill="none"><svg:use href="#letsIconsViewHideDuotone0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="m15.787 16.909l-8.929-8.93c-1.314.986-2.373 2.138-3.046 2.955c-.388.472-.582.707-.582 1.066s.194.594.582 1.066C5.232 14.79 8.364 18 12 18c1.353 0 2.636-.445 3.787-1.091M9.577 6.456A7 7 0 0 1 12 6c3.636 0 6.768 3.21 8.188 4.934c.388.472.582.707.582 1.066s-.194.594-.582 1.066a19.5 19.5 0 0 1-1.95 2.05z" clip-rule="evenodd"></svg:path><svg:use href="#letsIconsViewHideDuotone0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path stroke="currentColor" stroke-width="1.2" d="m8 5l12 12"></svg:path></svg:g>`,
})
export class LetsIconsViewHideDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
