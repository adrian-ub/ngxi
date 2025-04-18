import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHappyIcon],svg[lets-icons-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:circle cx="12" cy="12" r="10" stroke-width="2"></svg:circle><svg:path stroke-width="2" d="M9.402 13.5a3 3 0 0 0 5.196 0"></svg:path><svg:rect width="3.25" height="2.25" x="6.875" y="7.875" fill="currentColor" stroke-width=".25" rx="1.125"></svg:rect><svg:rect width="3.25" height="2.25" x="13.875" y="7.875" fill="currentColor" stroke-width=".25" rx="1.125"></svg:rect></svg:g>`,
})
export class LetsIconsHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
