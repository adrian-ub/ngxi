import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEuroIcon],svg[hugeicons-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 10h8m-8 4h8m6 3.608C17.87 19.64 15.812 21 13.461 21C9.894 21 7 17.866 7 14v-4c0-3.866 2.893-7 6.461-7C15.813 3 17.87 4.36 19 6.392" color="currentColor"></svg:path>`,
})
export class HugeiconsEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
