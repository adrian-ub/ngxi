import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeSortIcon],svg[prime-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.75H6a.74.74 0 0 1-.69-.46a.75.75 0 0 1 .16-.82l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 .16.82a.74.74 0 0 1-.69.46M7.81 9.25h8.38L12 5.06ZM12 20.75a.74.74 0 0 1-.53-.22l-6-6a.75.75 0 0 1-.16-.82a.74.74 0 0 1 .69-.46h12a.74.74 0 0 1 .69.46a.75.75 0 0 1-.16.82l-6 6a.74.74 0 0 1-.53.22m-4.19-6L12 18.94l4.19-4.19Z"></svg:path>`,
})
export class PrimeSortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
