import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHorizonalScrollPointIcon],svg[hugeicons-horizonal-scroll-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-4s4 2.946 4 4s-4 4-4 4M6 16s-4-2.946-4-4s4-4 4-4" color="currentColor"></svg:path>`,
})
export class HugeiconsHorizonalScrollPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
