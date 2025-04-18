import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftDoubleSIcon],svg[tdesign-chevron-left-double-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.088 11.498l4.95-4.95l1.414 1.415l-3.536 3.535l3.536 3.536l-1.414 1.414zm5.46 0l4.95-4.95l1.415 1.415l-3.536 3.535l3.536 3.536l-1.414 1.414z"></svg:path>`,
})
export class TdesignChevronLeftDoubleSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
