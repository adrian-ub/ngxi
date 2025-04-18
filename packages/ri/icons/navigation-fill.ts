import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNavigationFillIcon],svg[ri-navigation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.9 2.3l18.805 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.261 2.912a.5.5 0 0 1 .638-.612"></svg:path>`,
})
export class RiNavigationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
