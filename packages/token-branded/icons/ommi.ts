import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOmmiIcon],svg[token-branded-ommi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedOmmi0)" d="M13.434 4.708a7.34 7.34 0 0 1 5.349 2.964l1.367-.995a9.03 9.03 0 0 0-6.716-3.656zm-6.16.225a9 9 0 0 0 2.172 15.395l.579-1.586A7.313 7.313 0 0 1 8.338 6.238l-1.07-1.305zm6.891 14.265l.281 1.665a9 9 0 0 0 5.557-3.353l-1.242-1.153a7.34 7.34 0 0 1-4.596 2.84"></svg:path><svg:path fill="url(#tokenBrandedOmmi1)" d="M10.61 6.375a1.69 1.69 0 0 0 1.693-1.688A1.69 1.69 0 0 0 10.61 3a1.69 1.69 0 0 0-1.693 1.687a1.69 1.69 0 0 0 1.693 1.688"></svg:path><svg:path fill="url(#tokenBrandedOmmi2)" d="M8.917 13.125c.625 0 1.13-.504 1.13-1.125s-.505-1.125-1.13-1.125s-1.13.504-1.13 1.125s.506 1.125 1.13 1.125"></svg:path><svg:path fill="url(#tokenBrandedOmmi3)" d="M12 21c.78 0 1.412-.63 1.412-1.406c0-.777-.632-1.407-1.412-1.407s-1.412.63-1.412 1.407A1.41 1.41 0 0 0 12 21"></svg:path><svg:path fill="url(#tokenBrandedOmmi4)" d="M15.262 14.385a3.38 3.38 0 0 1-5.36-.754l-1.688.394a5.08 5.08 0 0 0 8.246 1.552zm.168-4.59a3.38 3.38 0 0 0-5.495.518H8.079a5.08 5.08 0 0 1 8.628-1.632z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedOmmi0" x1="17.101" x2="7.151" y1="5.529" y2="19.946" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3AD02C"></svg:stop><svg:stop offset=".28" stop-color="#3DD22D"></svg:stop><svg:stop offset=".59" stop-color="#79D41C"></svg:stop><svg:stop offset="1" stop-color="#C9D505"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOmmi1" x1="17.442" x2="8.345" y1="7.5" y2="17.106" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#233D1A"></svg:stop><svg:stop offset="1" stop-color="#2BD009"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOmmi2" x1="18.123" x2="5.167" y1="9.75" y2="17.545" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A7A710"></svg:stop><svg:stop offset="1" stop-color="#162C00"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOmmi3" x1="20.15" x2="7.098" y1="13.8" y2="13.8" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#489722"></svg:stop><svg:stop offset="1" stop-color="#516D3A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedOmmi4" x1="10.61" x2="14.823" y1="8.344" y2="15.667" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#47D12D"></svg:stop><svg:stop offset=".45" stop-color="#C8D65E" stop-opacity=".59"></svg:stop><svg:stop offset=".74" stop-color="#51CE32"></svg:stop><svg:stop offset="1" stop-color="#BFD30F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedOmmiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
