import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsSnowmanIcon],svg[meteocons-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsSnowman0"><svg:path fill="none" d="M119 428.7h271V305.3h-53.1L325 312l-14-9l2-14l12-7h65V81.6H119V282h68l13 8v15l-13 7l-15.2-9H119z"></svg:path></svg:clippath></svg:defs><svg:circle cx="325" cy="297" r="15" fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="6"></svg:circle><svg:circle cx="187" cy="297" r="15" fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="6"></svg:circle><svg:g clip-path="url(#meteoconsSnowman0)"><svg:circle cx="256" cy="330" r="84" fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:circle cx="256" cy="202" r="60" fill="none" stroke="#e2e8f0" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="#374151" d="M259 231a3 3 0 1 1-3-3a3 3 0 0 1 3 3m-12-5a3 3 0 1 0 3 3a3 3 0 0 0-3-3m-8-6a3 3 0 1 0 3 3a3 3 0 0 0-3-3m26 6a3 3 0 1 0 3 3a3 3 0 0 0-3-3m8-6a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7-34a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-40-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path><svg:path fill="#ef4444" d="M280 266h-65.2a7 7 0 0 1-6.8-7.1V249a7 7 0 0 1 7.3-7h81.4a7 7 0 0 1 7.3 7v9.8a7 7 0 0 1-6.8 7.1Z"></svg:path><svg:path fill="#1e293b" d="m290 133.4l-24.1 6.5a.3.3 0 0 1-.3-.2l-9.3-34.5a4 4 0 0 0-5-2.9l-38.5 10.4a4 4 0 0 0-2.9 5l9.3 34.4a.3.3 0 0 1-.2.3l-24.2 6.5a6.7 6.7 0 0 0-4.7 8.2l2.7 10.2a6.7 6.7 0 0 0 8.3 4.7l95.2-25.4a6.7 6.7 0 0 0 4.7-8.3l-2.7-10.2a6.7 6.7 0 0 0-8.3-4.7"></svg:path><svg:path fill="none" stroke="#ef4444" stroke-linecap="square" stroke-miterlimit="10" stroke-width="4" d="m222.1 147.4l38.6-10.3"></svg:path><svg:circle cx="256" cy="205.2" r="8" fill="#ffa94d"></svg:circle><svg:path fill="#374151" d="M264 324a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-8 16a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0-48a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class MeteoconsSnowmanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
