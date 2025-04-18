import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSixIcon],svg[ph-number-circle-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-104h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2l-32.23 54A36 36 0 1 0 128 112m0 56a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhNumberCircleSixIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
