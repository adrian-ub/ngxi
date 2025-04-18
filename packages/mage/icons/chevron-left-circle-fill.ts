import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChevronLeftCircleFillIcon],svg[mage-chevron-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m2.37 14.07a1 1 0 1 1-1.4 1.43L9.2 13.57a2.1 2.1 0 0 1-.48-.7a2.3 2.3 0 0 1-.16-.82a2.3 2.3 0 0 1 .16-.81a2.1 2.1 0 0 1 .47-.7l3.77-3.78a1.004 1.004 0 0 1 1.42 1.42l-3.82 3.88z"></svg:path>`,
})
export class MageChevronLeftCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
