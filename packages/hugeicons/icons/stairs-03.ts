import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStairs03Icon],svg[hugeicons-stairs-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M7 2v20M17 2v20M7 4h10M7 8h10M7 12h10M7 16h10M7 20h10" color="currentColor"></svg:path>`,
})
export class HugeiconsStairs03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
