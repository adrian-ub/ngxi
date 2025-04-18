import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSignInIcon],svg[vaadin-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1v2l1 1V2h7v12H8v-2l-1 1v2h9V1z"></svg:path><svg:path fill="currentColor" d="M10 8L5 4v2H0v4h5v2z"></svg:path>`,
})
export class VaadinSignInIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
