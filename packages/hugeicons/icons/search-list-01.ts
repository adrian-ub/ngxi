import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchList01Icon],svg[hugeicons-search-list-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10h5m-5 7h5M2 3h17m.6 15.6L22 21m-1.2-6.6a5.4 5.4 0 1 0-10.8 0a5.4 5.4 0 0 0 10.8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsSearchList01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
