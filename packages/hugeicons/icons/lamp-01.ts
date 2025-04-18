import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLamp01Icon],svg[hugeicons-lamp-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6m-3 6a3 3 0 1 0 6 0M5 13h14m-7-6V2m0 18v2m3-3l2 1.5M9 19l-2 1.5" color="currentColor"></svg:path>`,
})
export class HugeiconsLamp01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
