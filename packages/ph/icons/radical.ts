import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRadicalIcon],svg[ph-radical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80v24a8 8 0 0 1-16 0V88h-98.45L87.49 210.81a8 8 0 0 1-15 0l-48-128a8 8 0 1 1 15-5.62L80 185.22l40.51-108A8 8 0 0 1 128 72h112a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhRadicalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
