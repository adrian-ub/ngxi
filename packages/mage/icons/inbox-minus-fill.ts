import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageInboxMinusFillIcon],svg[mage-inbox-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.37v4.88A6.76 6.76 0 0 1 15.25 22h-6.5A6.76 6.76 0 0 1 2 15.25v-6.5A6.76 6.76 0 0 1 8.75 2h4.87a.75.75 0 1 1 0 1.5H8.75A5.25 5.25 0 0 0 3.5 8.75v2.5H6a2.72 2.72 0 0 1 1.94.8c.512.52.803 1.22.81 1.95A1.25 1.25 0 0 0 10 15.25h4a1.22 1.22 0 0 0 .88-.37a1.26 1.26 0 0 0 .37-.88A2.73 2.73 0 0 1 18 11.25h2.5v-.88a.75.75 0 1 1 1.5 0"></svg:path><svg:path fill="currentColor" d="M21.25 6.03h-4a.75.75 0 1 1 0-1.5h4a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageInboxMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
