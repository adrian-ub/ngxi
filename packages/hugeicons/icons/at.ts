import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAtIcon],svg[hugeicons-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.6 8.4v4.5a2.7 2.7 0 1 0 5.4 0V12a9 9 0 1 0-3.6 7.2M15.6 12a3.6 3.6 0 1 1-7.2 0a3.6 3.6 0 0 1 7.2 0" color="currentColor"></svg:path>`,
})
export class HugeiconsAtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
