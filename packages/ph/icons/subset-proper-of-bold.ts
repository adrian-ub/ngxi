import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubsetProperOfBoldIcon],svg[ph-subset-proper-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 208a12 12 0 0 1-12 12h-72a92 92 0 0 1 0-184h72a12 12 0 0 1 0 24h-72a68 68 0 0 0 0 136h72a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhSubsetProperOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
