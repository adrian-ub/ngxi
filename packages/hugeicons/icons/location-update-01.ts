import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocationUpdate01Icon],svg[hugeicons-location-update-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.808 16.684A1.18 1.18 0 0 1 12 17c-.302 0-.591-.113-.808-.317c-1.986-1.87-4.647-3.96-3.349-6.993C8.545 8.05 10.23 7 12 7s3.456 1.05 4.157 2.69c1.296 3.03-1.358 5.13-3.349 6.993M12 11.5h.009"></svg:path><svg:path d="m20 11l2 1c0-5.523-4.477-10-10-10c-4.1 0-7.625 2.468-9.168 6M4 13l-2-1c0 5.523 4.477 10 10 10c4.1 0 7.625-2.468 9.168-6"></svg:path></svg:g>`,
})
export class HugeiconsLocationUpdate01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
