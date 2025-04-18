import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMenuFriesIcon],svg[circum-menu-fries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.437 19.937a.5.5 0 0 1 0 1l-16.874.002a.5.5 0 0 1 0-1zm0-8.437a.5.5 0 0 1 0 1l-10 .001a.5.5 0 0 1 0-1zm0-8.438a.5.5 0 0 1 0 1l-16.874.001a.5.5 0 0 1 0-1z"></svg:path>`,
})
export class CircumMenuFriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
