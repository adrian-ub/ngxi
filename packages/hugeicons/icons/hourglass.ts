import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHourglassIcon],svg[hugeicons-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 2v3a7 7 0 0 1-7 7M5 2v3a7 7 0 0 0 7 7m0 0a7 7 0 0 1 7 7v3m-7-10a7 7 0 0 0-7 7v3M4 2h16m0 20H4" color="currentColor"></svg:path>`,
})
export class HugeiconsHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
