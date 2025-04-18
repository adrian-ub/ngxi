import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPopsicleIcon],svg[bx-popsicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2a7 7 0 0 0-4.94 2l-7.78 7.82a1 1 0 0 0 0 1.41l3.54 3.54l-3.54 3.53l1.42 1.42l3.53-3.54l3.54 3.54a1 1 0 0 0 1.41 0L20 13.94A7 7 0 0 0 15 2m3.54 10.54l-7.07 7.06l-2.82-2.83l-1.42-1.42l-2.83-2.83l7.07-7.07a5 5 0 0 1 7.08 7.08z"></svg:path>`,
})
export class BxPopsicleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
