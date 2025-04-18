import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBabyBoldIcon],svg[ph-baby-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m72-32a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-14.4 49.85a41 41 0 0 1-43.2 0a12 12 0 1 0-12.8 20.3a65 65 0 0 0 68.8 0a12 12 0 1 0-12.8-20.3M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84.08 84.08 0 0 0-82-83.95c-9.46 14.2-10 27.28-10 28a8 8 0 0 0 16-.05a12 12 0 0 1 24 0a32 32 0 0 1-64 0c0-.63.1-10.48 5-23.52A84 84 0 1 0 212 128"></svg:path>`,
})
export class PhBabyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
