import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGymnetIcon],svg[token-branded-gymnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F6EB6"><svg:path d="M12 11.438a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m8.145-8.437c-.27 4.533-4.601 8.33-6.727 9.668A8.81 8.81 0 0 0 20.814 11c.54-3.465-.225-6.778-.675-7.998z"></svg:path><svg:path d="M20.144 12.67C9.384 16.662 4.902 7.888 4.002 3c-3.695 11.001 3.7 16.333 8.07 17.998c4.838-1.867 7.397-6.333 8.072-8.33"></svg:path></svg:g>`,
})
export class TokenBrandedGymnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
