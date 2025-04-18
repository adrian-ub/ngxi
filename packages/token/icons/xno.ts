import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXnoIcon],svg[token-xno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.01 3.908L3.982 15.984l3.61 4.491l12.534-12.53z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.102 8.781a2.89 2.89 0 1 0 0-5.78a2.89 2.89 0 0 0 0 5.78m-12.204.014a2.89 2.89 0 1 0 0-5.78a2.89 2.89 0 0 0 0 5.78m0 12.205a2.89 2.89 0 1 0 0-5.78a2.89 2.89 0 0 0 0 5.78m15.095-2.89a2.892 2.892 0 1 1-5.784-.001a2.892 2.892 0 0 1 5.784 0" clip-rule="evenodd"></svg:path>`,
})
export class TokenXnoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
