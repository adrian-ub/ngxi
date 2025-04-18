import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusBoldIcon],svg[ph-magnifying-glass-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 112a12 12 0 0 1-12 12h-20v20a12 12 0 0 1-24 0v-20H80a12 12 0 0 1 0-24h20V80a12 12 0 0 1 24 0v20h20a12 12 0 0 1 12 12m76.49 120.49a12 12 0 0 1-17 0L168 185a92.12 92.12 0 1 1 17-17l47.54 47.53a12 12 0 0 1-.05 16.96M112 180a68 68 0 1 0-68-68a68.08 68.08 0 0 0 68 68"></svg:path>`,
})
export class PhMagnifyingGlassPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
