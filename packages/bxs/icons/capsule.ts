import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCapsuleIcon],svg[bxs-capsule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.434 20.566c1.335 0 2.591-.52 3.535-1.464l7.134-7.133a5.01 5.01 0 0 0-.001-7.072a4.97 4.97 0 0 0-3.536-1.463c-1.335 0-2.59.52-3.534 1.464l-7.134 7.133a5.01 5.01 0 0 0-.001 7.072a4.97 4.97 0 0 0 3.537 1.463m5.011-14.254a2.98 2.98 0 0 1 2.12-.878c.802 0 1.556.312 2.122.878a3.004 3.004 0 0 1 .001 4.243l-2.893 2.892l-4.242-4.244z"></svg:path>`,
})
export class BxsCapsuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
