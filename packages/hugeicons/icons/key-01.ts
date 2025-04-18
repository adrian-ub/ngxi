import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKey01Icon],svg[hugeicons-key-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 14.5a6 6 0 1 0-5.47-3.53L2.5 18.5v3h3v-2h2v-2h2l3.53-3.53c.754.34 1.59.53 2.47.53m2-8l-1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsKey01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
