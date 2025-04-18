import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubsetProperOfLightIcon],svg[ph-subset-proper-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 208a6 6 0 0 1-6 6h-72a86 86 0 0 1 0-172h72a6 6 0 0 1 0 12h-72a74 74 0 0 0 0 148h72a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhSubsetProperOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
