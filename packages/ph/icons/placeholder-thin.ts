import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlaceholderThinIcon],svg[ph-placeholder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 12v158.34L49.66 44H208a4 4 0 0 1 4 4M44 208V49.66L206.34 212H48a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhPlaceholderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
