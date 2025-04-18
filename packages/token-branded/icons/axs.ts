import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAxsIcon],svg[token-branded-axs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAxs0)" d="M3.677 6.509c.615-.79 5.205 1.72 7.54 3.891a.26.26 0 0 1-.016.392l-.741.62a.266.266 0 0 1-.323.01l-1.525-1.096l-1.821 1.938c-.18.185-.503.577-.726.418a1.01 1.01 0 0 1-.275-1.138c.286-.662 1.805-2.05 1.805-2.05c-.762-.608-2.33-1.18-2.605.758c-.18 1.26-.137 6.433 2.065 5.189c2.118-1.202 10.563-10.558 12.252-9.743c1.69.81 2.277 9.743 1.011 11.363c-.413.53-3.166.19-7.545-3.505a.27.27 0 0 1-.074-.296a.3.3 0 0 1 .059-.09l.74-.726a.27.27 0 0 1 .372-.006c.995.869 4.622 3.654 5.014 1.785c.259-1.25.285-6.793-.98-6.385c-.688.222-1.906 1.207-2.817 1.985c-1.975 1.694-8.948 9.356-10.568 8.456c-1.62-.895-2.012-10.272-.847-11.77z"></svg:path><svg:path fill="url(#tokenBrandedAxs1)" d="M3.677 6.509c.615-.79 5.205 1.72 7.54 3.891a.26.26 0 0 1-.016.392l-.741.62a.266.266 0 0 1-.323.01l-1.525-1.096l-1.821 1.938c-.18.185-.503.577-.726.418a1.01 1.01 0 0 1-.275-1.138c.286-.662 1.805-2.05 1.805-2.05c-.762-.608-2.33-1.18-2.605.758c-.18 1.26-.137 6.433 2.065 5.189c2.118-1.202 10.563-10.558 12.252-9.743c1.69.81 2.277 9.743 1.011 11.363c-.413.53-3.166.19-7.545-3.505a.27.27 0 0 1-.074-.296a.3.3 0 0 1 .059-.09l.74-.726a.27.27 0 0 1 .372-.006c.995.869 4.622 3.654 5.014 1.785c.259-1.25.285-6.793-.98-6.385c-.688.222-1.906 1.207-2.817 1.985c-1.975 1.694-8.948 9.356-10.568 8.456c-1.62-.895-2.012-10.272-.847-11.77z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAxs0" x1="12" x2="12" y1="5.648" y2="18.352" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00D2F7"></svg:stop><svg:stop offset="1" stop-color="#004CDC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAxs1" x1="21" x2="3" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8476F4"></svg:stop><svg:stop offset=".48" stop-color="#0083EC" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#8763EF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAxsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
