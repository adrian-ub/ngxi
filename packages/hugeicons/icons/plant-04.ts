import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlant04Icon],svg[hugeicons-plant-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12v8m0-8v1h3a6 6 0 0 0 6-6V6h-3a6 6 0 0 0-6 6m0-2v1H9a6 6 0 0 1-6-6V4h3a6 6 0 0 1 6 6" color="currentColor"></svg:path>`,
})
export class HugeiconsPlant04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
