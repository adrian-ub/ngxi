import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPercentLightIcon],svg[lets-icons-percent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M18 6L6 18"></svg:path><svg:circle cx="7" cy="8" r="3.5"></svg:circle><svg:circle cx="17" cy="16" r="3.5"></svg:circle></svg:g>`,
})
export class LetsIconsPercentLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
