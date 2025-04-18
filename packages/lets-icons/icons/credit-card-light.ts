import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCreditCardLightIcon],svg[lets-icons-credit-card-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M3.5 9.398c0-1.025 0-1.538.203-1.928a1.8 1.8 0 0 1 .767-.767c.39-.203.903-.203 1.928-.203h11.204c1.025 0 1.538 0 1.928.203a1.8 1.8 0 0 1 .767.767c.203.39.203.903.203 1.928v6.204c0 1.025 0 1.538-.203 1.928a1.8 1.8 0 0 1-.767.767c-.39.203-.903.203-1.928.203H6.398c-1.025 0-1.538 0-1.928-.203a1.8 1.8 0 0 1-.767-.767c-.203-.39-.203-.903-.203-1.928z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M3.5 10.5h17"></svg:path><svg:circle cx="6.5" cy="15.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsCreditCardLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
