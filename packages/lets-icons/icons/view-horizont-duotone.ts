import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsViewHorizontDuotoneIcon],svg[lets-icons-view-horizont-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsViewHorizontDuotone0"><svg:g fill="none"><svg:path fill="#fff" fill-opacity=".25" d="M12.864 7.37a10 10 0 0 1-.143 9.523L4 12z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14.5 5.5c-2.781 3.708-9.86 6.127-10.877 6.46a.049.049 0 0 0-.005.092c1.001.446 8.097 3.663 10.882 6.448"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M13.55 9.033a10 10 0 0 1 0 5.933a3 3 0 0 1 0-5.933" clip-rule="evenodd"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M16.5 12h4m-4-2.5l4-1.5m-4 6.5l4 1.5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsViewHorizontDuotone0)"></svg:path>`,
})
export class LetsIconsViewHorizontDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
