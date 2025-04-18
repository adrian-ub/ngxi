import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonScreenMapSetIcon],svg[carbon-screen-map-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 26h7v2h-7zm0-4h7v2h-7zm-3.586-10H25v-2h-8v8h2v-4.586L25.586 20L27 18.586z"></svg:path><svg:path fill="currentColor" d="M7 7h22v12h2V7c0-1.102-.897-2-2-2H7c-1.103 0-2 .898-2 2v15c0 1.103.897 2 2 2h7v4h-4v2h12v-8H7zm13 21h-4v-4h4z"></svg:path><svg:path fill="currentColor" d="M26 3V1H3c-1.103 0-2 .897-2 2v15h2V3z"></svg:path>`,
})
export class CarbonScreenMapSetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
