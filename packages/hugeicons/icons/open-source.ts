import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOpenSourceIcon],svg[hugeicons-open-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M12 8.5a4 4 0 0 0-2.24 7.315L7.637 21.5A10 10 0 0 1 2 12.5c0-5.523 4.477-10 10-10s10 4.477 10 10a10 10 0 0 1-5.636 9l-2.125-5.685A4 4 0 0 0 12 8.5" color="currentColor"></svg:path>`,
})
export class HugeiconsOpenSourceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
