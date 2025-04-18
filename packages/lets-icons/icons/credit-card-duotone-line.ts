import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCreditCardDuotoneLineIcon],svg[lets-icons-credit-card-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M3 11h18v4c0 1.886 0 2.828-.586 3.414S18.886 19 17 19H7c-1.886 0-2.828 0-3.414-.586S3 16.886 3 15z"></svg:path><svg:rect width="18" height="13" x="3" y="6" stroke="currentColor" stroke-width="1.2" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M7 15h.01M3 11h18"></svg:path></svg:g>`,
})
export class LetsIconsCreditCardDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
