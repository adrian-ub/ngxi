import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHamburgerButtonIcon],svg[icon-park-hamburger-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M7.94971 11.9497H39.9497"></svg:path><svg:path d="M7.94971 23.9497H39.9497"></svg:path><svg:path d="M7.94971 35.9497H39.9497"></svg:path></svg:g>`,
})
export class IconParkHamburgerButtonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
