import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconChevronUp12Icon],svg[octicon-chevron-up-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4c-.2 0-.4.1-.5.2L2.2 7.5c-.3.3-.3.8 0 1.1s.8.3 1.1 0L6 5.9l2.7 2.7c.3.3.8.3 1.1 0s.3-.8 0-1.1L6.6 4.3Q6.3 4 6 4"></svg:path>`,
})
export class OcticonChevronUp12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
