import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSevenBoldIcon],svg[ph-number-circle-seven-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m33.83-130.88a12 12 0 0 1 1.45 11l-32 88a12 12 0 0 1-22.56-8.2L134.87 100H104a12 12 0 0 1 0-24h48a12 12 0 0 1 9.83 5.12"></svg:path>`,
})
export class PhNumberCircleSevenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
