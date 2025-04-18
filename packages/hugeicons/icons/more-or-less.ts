import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoreOrLessIcon],svg[hugeicons-more-or-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0-5H7.003c-1.821 0-2.732 0-2.958-.617c-.227-.618.417-1.344 1.705-2.797L6.269 3M4 17h12.997c1.821 0 2.732 0 2.958.617c.227.618-.417 1.344-1.705 2.797l-.519.586" color="currentColor"></svg:path>`,
})
export class HugeiconsMoreOrLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
