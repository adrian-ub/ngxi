import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPercentIcon],svg[lets-icons-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M20 4L4 20"></svg:path><svg:circle cx="6.5" cy="7.5" r="3.5"></svg:circle><svg:circle cx="17.5" cy="16.5" r="3.5"></svg:circle></svg:g>`,
})
export class LetsIconsPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
