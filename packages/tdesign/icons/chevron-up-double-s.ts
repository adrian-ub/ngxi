import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpDoubleSIcon],svg[tdesign-chevron-up-double-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.084l4.95 4.95l-1.414 1.414l-3.535-3.536l-3.536 3.536l-1.414-1.414zm0 5.46l4.95 4.95l-1.414 1.415l-3.535-3.536l-3.536 3.536l-1.414-1.415z"></svg:path>`,
})
export class TdesignChevronUpDoubleSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
