import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMenuBurgerIcon],svg[circum-menu-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.563 4.063a.5.5 0 0 1 0-1l16.874-.001a.5.5 0 0 1 0 1zm0 8.438a.5.5 0 0 1 0-1l16.874-.002a.5.5 0 0 1 0 1zm0 8.438a.5.5 0 0 1 0-1l16.874-.002a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class CircumMenuBurgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
