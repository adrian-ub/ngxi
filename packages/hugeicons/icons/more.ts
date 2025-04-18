import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoreIcon],svg[hugeicons-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m6.5 11a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-13 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" color="currentColor"></svg:path>`,
})
export class HugeiconsMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
