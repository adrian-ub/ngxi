import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamForkFIcon],svg[jam-fork-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.033 15.04A3.001 3.001 0 1 1 7 15.03v-1.047q0-.111.008-.221a1 1 0 0 0-.462-.638L3.46 11.277A3 3 0 0 1 2 8.703V6.687a3.001 3.001 0 1 1 2 0v2.016a1 1 0 0 0 .487.858l3.086 1.846a3 3 0 0 1 .443.324a3 3 0 0 1 .444-.324l3.086-1.846a1 1 0 0 0 .487-.858V6.699A3.001 3.001 0 0 1 13 .858a3 3 0 0 1 1.033 5.817v2.028a3 3 0 0 1-1.46 2.574l-3.086 1.846a1 1 0 0 0-.462.638q.008.11.008.22v1.06z"></svg:path>`,
})
export class JamForkFIcon {
  readonly viewBox = input("-4 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
