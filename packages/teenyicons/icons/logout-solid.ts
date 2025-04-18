import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLogoutSolidIcon],svg[teenyicons-logout-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h7v1H2v11h6v1H1zm9.854 3.146l3.34 3.34l-3.327 3.603l-.734-.678L12.358 8H4V7h8.293l-2.147-2.146z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLogoutSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
