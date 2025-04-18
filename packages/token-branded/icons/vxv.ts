import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVxvIcon],svg[token-branded-vxv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedVxv0)" fill-rule="evenodd" d="M19.562 7.758L12 3.504L4.438 7.758v8.484L12 20.496l7.562-4.254zm-7.315-4.693a.5.5 0 0 0-.494 0L4.19 7.318a.5.5 0 0 0-.257.44v8.484c0 .182.098.35.257.44l7.562 4.253a.5.5 0 0 0 .494 0l7.562-4.253a.5.5 0 0 0 .257-.44V7.758a.5.5 0 0 0-.257-.44z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedVxv1)" fill-rule="evenodd" d="m12.313 17.879l5.419-9.268c.221-.378-.204-.802-.587-.585l-5.13 2.912l-5.116-2.91c-.382-.218-.808.206-.588.584l5.405 9.267a.346.346 0 0 0 .597 0m-.023-1.617l3.422-6.042c.086-.151-.084-.318-.236-.232l-3.478 1.983l.007.018l-2.084 1.188l1.77 3.086c.132.232.468.23.6-.001m-2.818-3.867l1.638-.93l-2.692-1.554c-.152-.088-.323.08-.236.232z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedVxv2)" d="m11.73 12.145l-.891-.522l1.366-.793l.86.53z"></svg:path><svg:path fill="url(#tokenBrandedVxv3)" d="m10.57 11.155l3.575 2.06l.601-.654l-3.531-2.076z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedVxv0" x1="8.345" x2="16.128" y1="5.048" y2="18.714" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DCDCDC"></svg:stop><svg:stop offset="1" stop-color="#585858"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedVxv1" x1="4.731" x2="20.464" y1="12.805" y2="9.474" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#51898A"></svg:stop><svg:stop offset="1" stop-color="#7DB9C9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedVxv2" x1="18.001" x2="1.441" y1="2.766" y2="11.938" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6AA4AE"></svg:stop><svg:stop offset=".334" stop-color="#538289"></svg:stop><svg:stop offset=".597" stop-color="#538289"></svg:stop><svg:stop offset="1" stop-color="#629CA3"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedVxv3" x1="10.908" x2="14.325" y1="10.79" y2="12.769" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#639CA3"></svg:stop><svg:stop offset="1" stop-color="#6EA9B4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedVxvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
