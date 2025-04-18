import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconZoomOut24Icon],svg[octicon-zoom-out-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 11.25a.75.75 0 0 0 0-1.5h-8a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill="currentColor" d="M0 10.5C0 4.701 4.701 0 10.5 0S21 4.701 21 10.5c0 2.63-.967 5.033-2.564 6.875l4.344 4.345a.749.749 0 1 1-1.06 1.06l-4.345-4.344A10.46 10.46 0 0 1 10.5 21C4.701 21 0 16.299 0 10.5m10.5-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9"></svg:path>`,
})
export class OcticonZoomOut24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
