import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeSortUpIcon],svg[prime-sort-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16.25H5a.74.74 0 0 1-.69-.46a.75.75 0 0 1 .16-.79l7-7a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 .16.82a.74.74 0 0 1-.69.43m-12.19-1.5h10.38L12 9.56Z"></svg:path>`,
})
export class PrimeSortUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
