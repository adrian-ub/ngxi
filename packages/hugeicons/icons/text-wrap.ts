import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextWrapIcon],svg[hugeicons-text-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h18M3 15h6m-6 6h6M3 9h13.5a4.5 4.5 0 1 1 0 9H12m0 0c0-.84 2.393-2.41 3-3m-3 3c0 .84 2.393 2.41 3 3" color="currentColor"></svg:path>`,
})
export class HugeiconsTextWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
