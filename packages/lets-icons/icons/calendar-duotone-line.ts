import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCalendarDuotoneLineIcon],svg[lets-icons-calendar-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCalendarDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="#fff" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10v1H3z"></svg:path><svg:rect width="18" height="15" x="3" y="6" stroke="#fff" rx="2"></svg:rect><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M9 16h6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M8 3v4m8-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCalendarDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCalendarDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
