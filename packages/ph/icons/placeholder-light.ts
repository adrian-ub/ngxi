import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlaceholderLightIcon],svg[ph-placeholder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 14v153.52L54.49 46H208a2 2 0 0 1 2 2M46 208V54.48L201.51 210H48a2 2 0 0 1-2-2"></svg:path>`,
})
export class PhPlaceholderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
