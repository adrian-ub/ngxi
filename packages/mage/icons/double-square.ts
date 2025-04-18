import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDoubleSquareIcon],svg[mage-double-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:rect width="9" height="9" x="7.5" y="7.5" rx="3"></svg:rect></svg:g>`,
})
export class MageDoubleSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
