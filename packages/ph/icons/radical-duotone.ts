import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRadicalDuotoneIcon],svg[ph-radical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 80v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V80Z" opacity=".2"></svg:path><svg:path d="M248 80v24a8 8 0 0 1-16 0V88h-98.45L87.49 210.81a8 8 0 0 1-15 0l-48-128a8 8 0 1 1 15-5.62L80 185.22l40.51-108A8 8 0 0 1 128 72h112a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhRadicalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
