import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRefrigeratorIcon],svg[hugeicons-refrigerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 6c0-1.886 0-2.828.586-3.414S7.114 2 9 2h6c1.886 0 2.828 0 3.414.586S19 4.114 19 6v14c0 .943 0 1.414-.293 1.707S17.943 22 17 22H7c-.943 0-1.414 0-1.707-.293S5 20.943 5 20zm3 1h.009M8 13h.009M5 10h14" color="currentColor"></svg:path>`,
})
export class HugeiconsRefrigeratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
