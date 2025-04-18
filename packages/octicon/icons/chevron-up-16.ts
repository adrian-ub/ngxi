import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconChevronUp16Icon],svg[octicon-chevron-up-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.22 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.749.749 0 1 1-1.06 1.06L8 6.811L4.28 10.53a.75.75 0 0 1-1.06 0"></svg:path>`,
})
export class OcticonChevronUp16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
