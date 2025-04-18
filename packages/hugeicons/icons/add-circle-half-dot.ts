import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAddCircleHalfDotIcon],svg[hugeicons-add-circle-half-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4.649 5.079q.207-.22.427-.428M7.947 2.73q.273-.122.553-.229m-6 6q.108-.284.232-.558M12 8v8m4-4H8" color="currentColor"></svg:path>`,
})
export class HugeiconsAddCircleHalfDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
