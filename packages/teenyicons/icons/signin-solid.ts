import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSigninSolidIcon],svg[teenyicons-signin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1h7v13H7v-1h6V2H7zm.854 3.146l3.34 3.34l-3.327 3.603l-.734-.678L9.358 8H1V7h8.293L7.146 4.854z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSigninSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
