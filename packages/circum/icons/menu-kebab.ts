import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMenuKebabIcon],svg[circum-menu-kebab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 12a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 12m1-7.437a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3.001.001a1.5 1.5 0 0 0 3.001-.001m1 14.874a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3.001.001a1.5 1.5 0 0 0 3.001-.001"></svg:path>`,
})
export class CircumMenuKebabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
