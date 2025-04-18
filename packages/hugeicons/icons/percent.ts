import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPercentIcon],svg[hugeicons-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 20L20 4m-11.732.732a2.5 2.5 0 1 1-3.536 3.536a2.5 2.5 0 0 1 3.536-3.536m11 11a2.5 2.5 0 1 1-3.536 3.536a2.5 2.5 0 0 1 3.536-3.536" color="currentColor"></svg:path>`,
})
export class HugeiconsPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
