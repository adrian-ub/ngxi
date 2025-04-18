import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateRangeDuotoneIcon],svg[lets-icons-date-range-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z"></svg:path><svg:rect width="18" height="15" x="3" y="6" stroke="currentColor" stroke-width="1.2" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M7 3v3m10-3v3"></svg:path><svg:rect width="4" height="2" x="7" y="12" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="7" y="16" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="13" y="12" fill="currentColor" rx=".5"></svg:rect><svg:rect width="4" height="2" x="13" y="16" fill="currentColor" rx=".5"></svg:rect></svg:g>`,
})
export class LetsIconsDateRangeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
