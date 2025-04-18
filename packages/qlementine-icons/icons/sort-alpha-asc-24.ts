import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSortAlphaAsc24Icon],svg[qlementine-icons-sort-alpha-asc-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 0a.5.5 0 0 1 .466.319l3.5 9a.5.5 0 1 1-.932.362l-1.04-2.68h-3.98l-1.04 2.68a.5.5 0 0 1-.932-.362l3.5-9A.5.5 0 0 1 18.008 0zm0 1.88L19.6 6h-3.2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5 2.5a.5.5 0 0 0-1 0v17.8L.85 17.15a.5.5 0 0 0-.707.707l4 4a.5.5 0 0 0 .707 0l4-4a.5.5 0 0 0-.707-.707l-3.15 3.15V2.5zm10 12a.5.5 0 0 1 .5-.5h6a.499.499 0 0 1 .405.792l-5.93 8.21h5.52a.5.5 0 0 1 0 1h-6.5a.499.499 0 0 1-.405-.792L20.52 15H15.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class QlementineIconsSortAlphaAsc24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
