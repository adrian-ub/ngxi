import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconChevronLeft12Icon],svg[octicon-chevron-left-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.587 6.025c0 .2.1.4.2.5l3.3 3.3c.3.3.8.3 1.1 0s.3-.8 0-1.1l-2.7-2.7l2.7-2.7c.3-.3.3-.8 0-1.1s-.8-.3-1.1 0l-3.2 3.2q-.3.3-.3.6"></svg:path>`,
})
export class OcticonChevronLeft12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
