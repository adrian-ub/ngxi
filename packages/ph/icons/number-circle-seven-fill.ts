import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSevenFillIcon],svg[ph-number-circle-seven-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m31.52 66.73l-32 88A8 8 0 0 1 120 184a7.9 7.9 0 0 1-2.73-.48a8 8 0 0 1-4.79-10.25L140.58 96H104a8 8 0 0 1 0-16h48a8 8 0 0 1 7.52 10.73"></svg:path>`,
})
export class PhNumberCircleSevenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
