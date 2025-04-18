import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsAngryIcon],svg[lets-icons-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:circle cx="12" cy="12" r="10" stroke-width="2"></svg:circle><svg:path stroke-width="2" d="M7.881 16.244c.493-.427 1.142-.735 1.842-.937A8.3 8.3 0 0 1 12 15c.786 0 1.57.103 2.277.307c.7.202 1.35.51 1.842.937M17 8l-3 2M7 8l3 2"></svg:path><svg:circle cx="8" cy="10" r="1.25" fill="currentColor" stroke-width=".5"></svg:circle><svg:circle cx="16" cy="10" r="1.25" fill="currentColor" stroke-width=".5"></svg:circle></svg:g>`,
})
export class LetsIconsAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
