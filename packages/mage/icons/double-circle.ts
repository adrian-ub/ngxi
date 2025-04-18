import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDoubleCircleIcon],svg[mage-double-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="19" height="19" x="2.5" y="2.5" rx="9.5"></svg:rect><svg:rect width="8.216" height="8.216" x="7.892" y="7.892" rx="4.108"></svg:rect></svg:g>`,
})
export class MageDoubleCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
