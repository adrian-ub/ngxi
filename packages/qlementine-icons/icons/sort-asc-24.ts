import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSortAsc24Icon],svg[qlementine-icons-sort-asc-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2a.5.5 0 0 1 .5.5v17.8l3.15-3.15a.5.5 0 0 1 .707.707l-4 4a.5.5 0 0 1-.707 0l-4-4a.5.5 0 0 1 .707-.707l3.15 3.15V2.5a.5.5 0 0 1 .5-.5zM11 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 3.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm-.5 4.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class QlementineIconsSortAsc24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
