import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconChevronDown24Icon],svg[octicon-chevron-down-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.22 8.22a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939L6.28 8.22a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class OcticonChevronDown24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
