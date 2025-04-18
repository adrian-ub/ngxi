import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMoneyDuotoneIcon],svg[lets-icons-money-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10v4c0 1.886 0 2.828-.586 3.414S18.886 18 17 18H7c-1.886 0-2.828 0-3.414-.586S3 15.886 3 14z"></svg:path><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle><svg:rect width="3" height="1" x="5" y="8" fill="currentColor" rx=".5"></svg:rect><svg:rect width="3" height="1" x="16" y="15" fill="currentColor" rx=".5"></svg:rect>`,
})
export class LetsIconsMoneyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
