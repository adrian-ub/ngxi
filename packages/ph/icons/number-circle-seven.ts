import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSevenIcon],svg[ph-number-circle-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m30.55-132.59a8 8 0 0 1 1 7.32l-32 88A8 8 0 0 1 120 184a7.9 7.9 0 0 1-2.73-.48a8 8 0 0 1-4.79-10.25L140.58 96H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 3.41"></svg:path>`,
})
export class PhNumberCircleSevenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
