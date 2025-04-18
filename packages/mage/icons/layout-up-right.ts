import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLayoutUpRightIcon],svg[mage-layout-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 9.167h18.5M15.334 21.25V9.167"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLayoutUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
