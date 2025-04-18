import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMonocleIcon],svg[hugeicons-monocle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="8" cy="8.496" r="6"></svg:circle><svg:circle cx="16" cy="8.496" r="2"></svg:circle><svg:path d="M22 17.496v2c0 .35-.06.687-.17 1M20 22.325a3 3 0 0 1-2 0m-2-4.83v2c0 .351.06.688.17 1m5.83-12v-3m0 9v-3m-6 3v-4"></svg:path></svg:g>`,
})
export class HugeiconsMonocleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
