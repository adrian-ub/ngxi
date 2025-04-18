import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconAngularIcon],svg[devicon-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:lineargradient id="deviconAngular0" x1="14.704" x2="110.985" y1="46.27" y2="92.024" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#e40035"></svg:stop><svg:stop offset=".24" stop-color="#f60a48"></svg:stop><svg:stop offset=".352" stop-color="#f20755"></svg:stop><svg:stop offset=".494" stop-color="#dc087d"></svg:stop><svg:stop offset=".745" stop-color="#9717e7"></svg:stop><svg:stop offset="1" stop-color="#6c00f5"></svg:stop></svg:lineargradient><svg:path fill="url(#deviconAngular0)" d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"></svg:path><svg:lineargradient id="deviconAngular1" x1="28.733" x2="91.742" y1="117.071" y2="45.195" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#ff31d9"></svg:stop><svg:stop offset="1" stop-color="#ff5be1" stop-opacity="0"></svg:stop></svg:lineargradient><svg:path fill="url(#deviconAngular1)" d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"></svg:path>`,
})
export class DeviconAngularIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
