import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phKeyholeBoldIcon],svg[ph-keyhole-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-144a44 44 0 0 0-33.61 72.41l-9.86 32.06A12 12 0 0 0 96 188h64a12 12 0 0 0 11.47-15.53l-9.86-32.06A44 44 0 0 0 128 68m8.53 72.51l7.22 23.49h-31.5l7.22-23.49a12 12 0 0 0-4-12.89a20 20 0 1 1 25 0a12 12 0 0 0-3.94 12.89"></svg:path>`,
})
export class PhKeyholeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
