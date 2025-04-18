import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubsetProperOfIcon],svg[ph-subset-proper-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 208a8 8 0 0 1-8 8h-72a88 88 0 0 1 0-176h72a8 8 0 0 1 0 16h-72a72 72 0 0 0 0 144h72a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSubsetProperOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
