import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrowdfundingIcon],svg[hugeicons-crowdfunding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="5" r="3"></svg:circle><svg:circle cx="12" cy="20" r="2"></svg:circle><svg:circle cx="20" cy="20" r="2"></svg:circle><svg:circle cx="4" cy="20" r="2"></svg:circle><svg:path d="M20 15c0-1.105-1.12-2-2.5-2h-11c-1.38 0-2.5.895-2.5 2m8-4v4"></svg:path></svg:g>`,
})
export class HugeiconsCrowdfundingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
