import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHamburgerIcon],svg[arcticons-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 20.257c0-5.509-8.73-9.975-19.5-9.975S4.5 14.748 4.5 20.257zm-39 7.486c0 5.509 8.73 9.975 19.5 9.975s19.5-4.466 19.5-9.975z"></svg:path>`,
})
export class ArcticonsHamburgerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
