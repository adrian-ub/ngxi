import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRewindCircleIcon],svg[ph-rewind-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M115.58 84.84a8 8 0 0 0-8.38.76l-48 36a8 8 0 0 0 0 12.8l48 36a8 8 0 0 0 4.8 1.6a8 8 0 0 0 8-8V92a8 8 0 0 0-4.42-7.16M104 148l-26.67-20L104 108Zm75.58-63.16a8 8 0 0 0-8.38.76l-48 36a8 8 0 0 0 0 12.8l48 36a8 8 0 0 0 4.8 1.6a8 8 0 0 0 8-8V92a8 8 0 0 0-4.42-7.16M168 148l-26.67-20L168 108Z"></svg:path>`,
})
export class PhRewindCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
