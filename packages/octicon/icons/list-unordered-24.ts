import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconListUnordered24Icon],svg[octicon-list-unordered-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 5.5h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5m0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5m0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5M5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 12a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class OcticonListUnordered24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
