import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSortDesc24Icon],svg[qlementine-icons-sort-desc-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 22a.5.5 0 0 0 .5-.5V3.7l3.15 3.15a.5.5 0 0 0 .707-.707l-4-4a.5.5 0 0 0-.707 0l-4 4a.5.5 0 0 0 .707.707l3.15-3.15v17.8a.5.5 0 0 0 .5.5zM11 6.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m.5 3.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class QlementineIconsSortDesc24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
