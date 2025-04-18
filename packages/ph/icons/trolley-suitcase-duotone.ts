import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseDuotoneIcon],svg[ph-trolley-suitcase-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v72a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M72 144V72a16 16 0 0 1 16-16h32V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h32a16 16 0 0 1 16 16v72a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16m64-88h32V40h-32Zm-48 88h128V72H88Z"></svg:path></svg:g>`,
})
export class PhTrolleySuitcaseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
