import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSortAlphaDesc24Icon],svg[qlementine-icons-sort-alpha-desc-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 .5a.5.5 0 0 1 .5-.5h6a.499.499 0 0 1 .405.792l-5.93 8.21h5.52a.5.5 0 0 1 0 1h-6.5a.499.499 0 0 1-.405-.792L20.52 1H15.5a.5.5 0 0 1-.5-.5m-10 21a.5.5 0 0 1-1 0V3.7L.85 6.85a.5.5 0 0 1-.707-.707l4-4a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1-.707.707L4.993 3.7v17.8z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.5 14.3a.5.5 0 0 0-.932 0l-3.5 9a.5.5 0 1 0 .932.362l1.04-2.68h3.98l1.04 2.68a.5.5 0 0 0 .932-.362l-3.5-9zm1.14 5.68l-1.6-4.12l-1.6 4.12z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsSortAlphaDesc24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
