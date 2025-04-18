import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsViewHorizontDuotoneLineIcon],svg[lets-icons-view-horizont-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsViewHorizontDuotoneLine0"><svg:g fill="none"><svg:path stroke="#fff" d="M12.42 7.602a9.5 9.5 0 0 1-.135 9.047"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14.5 5.5c-2.781 3.708-9.86 6.127-10.877 6.46a.049.049 0 0 0-.005.092c1.001.446 8.097 3.663 10.882 6.448"></svg:path><svg:path stroke="#fff" d="M13.233 14.49a2.5 2.5 0 1 1-.093-4.986"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M16.5 12h4m-4-2.5l4-1.5m-4 6.5l4 1.5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsViewHorizontDuotoneLine0)"></svg:path>`,
})
export class LetsIconsViewHorizontDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
