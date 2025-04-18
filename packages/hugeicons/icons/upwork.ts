import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUpworkIcon],svg[hugeicons-upwork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4.5v6.25c0 2.043 1.708 3.75 3.75 3.75c2.043 0 3.75-1.707 3.75-3.75V4.5c1.25 3.125 3.597 10 8.125 10c2.383 0 4.375-1.992 4.375-4.375S20.008 5.75 17.625 5.75c-2.534 0-4.034 1.875-4.375 3.75c-.303 1.662-1.875 10-1.875 10" color="currentColor"></svg:path>`,
})
export class HugeiconsUpworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
