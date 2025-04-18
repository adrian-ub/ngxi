import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSignInAltIcon],svg[vaadin-sign-in-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2v16H0zm3 10h8v3l5-5l-5-5v3H3z"></svg:path>`,
})
export class VaadinSignInAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
