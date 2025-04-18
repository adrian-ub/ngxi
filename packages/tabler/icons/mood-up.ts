import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodUpIcon],svg[tabler-mood-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.984 12.536a9 9 0 1 0-8.463 8.449M19 22v-6m3 3l-3-3l-3 3m-7-9h.01M15 10h.01"></svg:path><svg:path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1"></svg:path></svg:g>`,
})
export class TablerMoodUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
