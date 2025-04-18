import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCylinderDuotoneIcon],svg[ph-cylinder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 60c0 19.88-28.65 36-64 36S64 79.88 64 60s28.65-36 64-36s64 16.12 64 36" opacity=".2"></svg:path><svg:path d="M128 16c-40.37 0-72 19.33-72 44v136c0 24.67 31.63 44 72 44s72-19.33 72-44V60c0-24.67-31.63-44-72-44m0 16c26.49 0 56 11.5 56 28s-29.51 28-56 28s-56-11.5-56-28s29.51-28 56-28m0 192c-29.83 0-56-13.08-56-28V88c13.1 9.85 33.14 16 56 16s42.9-6.2 56-16v108c0 14.92-26.17 28-56 28"></svg:path></svg:g>`,
})
export class PhCylinderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
