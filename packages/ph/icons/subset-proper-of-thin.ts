import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubsetProperOfThinIcon],svg[ph-subset-proper-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 208a4 4 0 0 1-4 4h-72a84 84 0 0 1 0-168h72a4 4 0 0 1 0 8h-72a76 76 0 0 0 0 152h72a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSubsetProperOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
