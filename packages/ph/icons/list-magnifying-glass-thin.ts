import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassThinIcon],svg[ph-list-magnifying-glass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h72a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m88 56H40a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8m106.83 6.83a4 4 0 0 1-5.66 0l-22.72-22.72a36.06 36.06 0 1 1 5.66-5.66l22.72 22.72a4 4 0 0 1 0 5.66M184 172a28 28 0 1 0-28-28a28 28 0 0 0 28 28"></svg:path>`,
})
export class PhListMagnifyingGlassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
