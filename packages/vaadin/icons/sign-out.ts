import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSignOutIcon],svg[vaadin-sign-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4V1H0v14h9v-3H8v2H1V2h7v2z"></svg:path><svg:path fill="currentColor" d="m16 8l-5-4v2H6v4h5v2z"></svg:path>`,
})
export class VaadinSignOutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
