import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSelect01Icon],svg[hugeicons-select-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 2v6M2 5h6m4 0h3m-3 17h3m3-17h.5A3.5 3.5 0 0 1 22 8.5V9m0 9v.5a3.5 3.5 0 0 1-3.5 3.5H18m-9 0h-.5A3.5 3.5 0 0 1 5 18.5V18m17-6v3M5 12v3" color="currentColor"></svg:path>`,
})
export class HugeiconsSelect01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
