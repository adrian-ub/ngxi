import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedIporIcon],svg[token-branded-ipor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedIpor0)" d="M9.975 17.4L3 9.3l6.975 6.75l6.3-8.55l.675.9l1.148-1.8L21 12.45l-2.925-4.725l-1.125 1.8l-.675-.675z"></svg:path><svg:path fill="url(#tokenBrandedIpor1)" d="M13.971 12.855c2.682-.09 5.634-.32 7.029-.45c-1.373-.099-4.135-.27-6.629-.356l-.405.81zM12.166 12l-.53.9a83 83 0 0 1-4.55-.175l-.373-.559q2.724-.155 5.453-.166M3 12.405c.518-.04 1.246-.09 2.088-.144l.194.342c-.941-.072-1.737-.144-2.282-.198"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedIpor0" x1="2.676" x2="20.968" y1="9.327" y2="9.327" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E6DA88"></svg:stop><svg:stop offset="1" stop-color="#E15F50"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedIpor1" x1="3.122" x2="22.471" y1="12.45" y2="12.45" gradientUnits="userSpaceOnUse"><svg:stop offset=".67" stop-color="#2E80BF"></svg:stop><svg:stop offset=".95" stop-color="#2A3985"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedIporIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
