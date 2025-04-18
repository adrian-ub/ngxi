import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFeatherIcon],svg[hugeicons-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.686 17c1.635 0 2.453 0 3.188-.305c.735-.304 1.313-.882 2.47-2.038l4.414-4.414a4.243 4.243 0 1 0-6-6L9.343 8.657c-1.156 1.156-1.734 1.734-2.038 2.47C7 11.86 7 12.678 7 14.313V17zM3 21L15 9m-3 3h2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsFeatherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
