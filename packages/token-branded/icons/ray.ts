import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRayIcon],svg[token-branded-ray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRay0)" d="M19 10v6l-7 3.88L5 16V8l7-3.894l5.506 2.928l.832-.468L12 3L4 7.501v8.998L12 21l8-4.501V9.288z"></svg:path><svg:path fill="url(#tokenBrandedRay1)" d="M10.5 16H9v-4h3.5c.76-.008 1.498-.508 1.5-1.28c.008-.758-.748-1.225-1.5-1.22H9V8h3.794c1.602 0 2.693 1.2 2.705 2.72c.014 1.642-1.286 2.78-3.108 2.78h-1.892z"></svg:path><svg:path fill="url(#tokenBrandedRay2)" d="M15.757 16h-1.743l-1.079-1.896c.427-.025 1.16-.2 1.574-.424z"></svg:path><svg:path fill="url(#tokenBrandedRay3)" d="m18.25 8.52l.875.48l.875-.48V7.501L19.125 7l-.875.502z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRay0" x1="19.986" x2="3.145" y1="7.506" y2="14.418" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C200FB"></svg:stop><svg:stop offset=".49" stop-color="#3773FE"></svg:stop><svg:stop offset="1" stop-color="#5AC4BE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRay1" x1="31.042" x2="-9.269" y1="1.888" y2="19.986" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C200FB"></svg:stop><svg:stop offset=".49" stop-color="#3773FE"></svg:stop><svg:stop offset="1" stop-color="#5AC4BE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRay2" x1="43.977" x2="-58.386" y1="-44.916" y2="-14.224" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C200FB"></svg:stop><svg:stop offset=".49" stop-color="#3773FE"></svg:stop><svg:stop offset="1" stop-color="#5AC4BE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRay3" x1="20.003" x2="2.109" y1="7.504" y2="14.733" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C200FB"></svg:stop><svg:stop offset=".49" stop-color="#3773FE"></svg:stop><svg:stop offset="1" stop-color="#5AC4BE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
