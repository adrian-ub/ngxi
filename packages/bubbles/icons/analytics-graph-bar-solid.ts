import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAnalyticsGraphBarSolidIcon],svg[bubbles-analytics-graph-bar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" clip-path="url(#bubblesAnalyticsGraphBarSolid0)"><svg:path d="M4.587 3.413L1.914 6.087M9.54 4.213l-3.113-.826m7.167-1.46l-2.387 1.866M5.5 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m9-1.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2M1.5 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1 7.5h15"></svg:path><svg:path fill="currentColor" d="M4 11.833H2a.506.506 0 0 0-.5.5V15.5h3v-3.167a.5.5 0 0 0-.5-.5m5-4.666H7a.507.507 0 0 0-.5.5V15.5h3V7.667a.5.5 0 0 0-.5-.5m5 2.666h-2a.507.507 0 0 0-.5.5V15.5h3v-5.167a.5.5 0 0 0-.5-.5"></svg:path></svg:g><svg:defs><svg:clippath id="bubblesAnalyticsGraphBarSolid0"><svg:path fill="#fff" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class BubblesAnalyticsGraphBarSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
