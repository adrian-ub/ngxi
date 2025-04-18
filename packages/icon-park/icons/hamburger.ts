import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHamburgerIcon],svg[icon-park-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M44 22C44 12.0589 35.0457 4 24 4C12.9543 4 4 12.0589 4 22H44Z" clip-rule="evenodd"></svg:path><svg:rect width="40" height="6" x="4" y="38" fill="#2F88FF"></svg:rect><svg:path d="M4 28L9.45455 32L16.7273 28L24 32L31.2727 28L38.5455 32L44 28"></svg:path></svg:g>`,
})
export class IconParkHamburgerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
