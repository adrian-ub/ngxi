import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowDiagonalIcon],svg[hugeicons-arrow-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 3.266c.844-.012 3.64-.593 4.234 0s.012 3.39 0 4.234m-17.468 9c-.012.844-.593 3.64 0 4.234s3.39.012 4.234 0m-3.604-.676L20.105 3.942" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
