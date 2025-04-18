import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalDuotoneIcon],svg[ph-briefcase-metal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v32H32V72a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8M32 200a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-32H32Z" opacity=".2"></svg:path><svg:path d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M40 112h176v48H40Zm56-64a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v24H40V72Zm0 128H40v-24h176z"></svg:path></svg:g>`,
})
export class PhBriefcaseMetalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
