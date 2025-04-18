import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFunnelXBoldIcon],svg[ph-funnel-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.78 69.45A20 20 0 0 0 216 36H40a20 20 0 0 0-14.8 33.45l.12.14L92 140.75V216a20 20 0 0 0 31.09 16.65l32-21.34a20 20 0 0 0 8.9-16.64v-53.92l66.67-71.16Zm-87.55 58.35A12 12 0 0 0 140 136v56.52l-24 16V136a12 12 0 0 0-3.24-8.2L49.23 60h157.52Zm105.26 79.72a12 12 0 1 1-17 17L216 209l-15.52 15.51a12 12 0 0 1-17-17L199 192l-15.52-15.52a12 12 0 0 1 17-17L216 175l15.51-15.52a12 12 0 1 1 17 17L233 192Z"></svg:path>`,
})
export class PhFunnelXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
