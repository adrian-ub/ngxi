import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsOrderDuotoneIcon],svg[lets-icons-order-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="14" height="18" x="5" y="3" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 7.5h5m-5 3h3m-3 3h4m-4 3h3"></svg:path><svg:rect width="1" height="1" x="7" y="7" fill="currentColor" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="10" fill="currentColor" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="13" fill="currentColor" rx=".5"></svg:rect><svg:rect width="1" height="1" x="7" y="16" fill="currentColor" rx=".5"></svg:rect></svg:g>`,
})
export class LetsIconsOrderDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
