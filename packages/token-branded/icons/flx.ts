import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFlxIcon],svg[token-branded-flx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedFlx0)" fill-rule="evenodd" d="M16.263 3h-1.82l-.847 4.14a5 5 0 0 0-1.142-.303l.493-2.416H9.963l-.616 2.994a4.974 4.974 0 0 0-1.511 7.403L6.808 19.84A.96.96 0 0 0 7.74 21h1.814l.91-4.434q.56.15 1.17.17l-.583 2.843h2.984l.8-3.903a4.964 4.964 0 0 0 1.29-6.3l1.065-5.21A.962.962 0 0 0 16.258 3zm-4.5 10.895a2.132 2.132 0 1 0 0-4.264a2.132 2.132 0 0 0 0 4.264" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedFlx0" x1="15.351" x2="3.87" y1="5.25" y2="13.428" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#77D8FE"></svg:stop><svg:stop offset="1" stop-color="#4FDF9D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedFlxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
