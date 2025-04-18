import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronDownDoubleSIcon],svg[tdesign-chevron-down-double-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17.909l-4.95-4.95l1.415-1.414l3.536 3.535l3.535-3.535l1.414 1.414zm0-5.461l-4.95-4.95l1.415-1.414l3.536 3.535l3.535-3.535l1.414 1.414z"></svg:path>`,
})
export class TdesignChevronDownDoubleSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
