import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMoneyLightIcon],svg[lets-icons-money-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="18" height="12" x="3" y="6" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M5 9h3m8 6h3"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class LetsIconsMoneyLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
