import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStarFourDuotoneIcon],svg[ph-star-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m226.76 135.48l-66.94 24.34l-24.34 66.94a8 8 0 0 1-15 0l-24.3-66.94l-66.94-24.34a8 8 0 0 1 0-15l66.94-24.3l24.34-66.94a8 8 0 0 1 15 0l24.34 66.94l66.94 24.34a8 8 0 0 1-.04 14.96" opacity=".2"></svg:path><svg:path d="m229.5 113l-63.44-23.06L143 26.5a16 16 0 0 0-30 0L89.94 89.94L26.5 113a16 16 0 0 0 0 30l63.44 23.07L113 229.5a16 16 0 0 0 30 0l23.07-63.44L229.5 143a16 16 0 0 0 0-30m-72.42 39.3a8 8 0 0 0-4.78 4.78L128 223.9l-24.3-66.82a8 8 0 0 0-4.78-4.78L32.1 128l66.82-24.3a8 8 0 0 0 4.78-4.78L128 32.1l24.3 66.82a8 8 0 0 0 4.78 4.78L223.9 128Z"></svg:path></svg:g>`,
})
export class PhStarFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
