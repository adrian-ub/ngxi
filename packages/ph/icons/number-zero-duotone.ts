import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberZeroDuotoneIcon],svg[ph-number-zero-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M183.25 63.2C170.25 42.79 151.15 32 128 32S85.75 42.79 72.75 63.2C62 80.18 56 103.19 56 128s6 47.82 16.75 64.8c13 20.41 32.1 31.2 55.25 31.2s42.25-10.79 55.25-31.2c10.8-17 16.75-40 16.75-64.8s-5.95-47.82-16.75-64.8M128 208c-38.68 0-56-40.18-56-80s17.32-80 56-80s56 40.18 56 80s-17.32 80-56 80"></svg:path></svg:g>`,
})
export class PhNumberZeroDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
