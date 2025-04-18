import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCancelCircleHalfDotIcon],svg[hugeicons-cancel-circle-half-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12c0 5.523 4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10M5.399 5.079q.207-.22.427-.428M8.697 2.73q.273-.122.553-.229M3.482 7.942q-.124.275-.232.558m12.5.5l-3 3m0 0l-3 3m3-3l3 3m-3-3l-3-3" color="currentColor"></svg:path>`,
})
export class HugeiconsCancelCircleHalfDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
