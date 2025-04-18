import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNavigationLineIcon],svg[ri-navigation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.965 5.096l3.546 12.41l3.04-6.08l5.637-2.255zM2.899 2.3l18.806 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.261 2.91a.5.5 0 0 1 .638-.611"></svg:path>`,
})
export class RiNavigationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
