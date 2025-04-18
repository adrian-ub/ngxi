import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodShareIcon],svg[tabler-mood-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.942 13.018A9 9 0 1 0 12 21M9 10h.01M15 10h.01"></svg:path><svg:path d="M9.5 15c.658.672 1.56 1 2.5 1q.32 0 .63-.05M16 22l5-5m0 4.5V17h-4.5"></svg:path></svg:g>`,
})
export class TablerMoodShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
