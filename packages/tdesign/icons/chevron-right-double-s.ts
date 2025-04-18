import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightDoubleSIcon],svg[tdesign-chevron-right-double-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.912 11.498l-4.95 4.95l-1.414-1.414l3.535-3.536l-3.535-3.535l1.414-1.415zm-5.461 0l-4.95 4.95l-1.414-1.414l3.535-3.536l-3.535-3.535L7.5 6.548z"></svg:path>`,
})
export class TdesignChevronRightDoubleSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
