import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAnalytics02Icon],svg[hugeicons-analytics-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.5 17.5v-3m5 3v-9m5 9v-4m5-8a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M21.496 11s.004.34.004 1c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.478 0-6.717 1.391-8.109C5.282 2.5 7.521 2.5 12 2.5h1"></svg:path></svg:g>`,
})
export class HugeiconsAnalytics02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
