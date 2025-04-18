import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodXIcon],svg[tabler-mood-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.983 12.556a9 9 0 1 0-8.433 8.427M9 10h.01M15 10h.01"></svg:path><svg:path d="M9.5 15c.658.64 1.56 1 2.5 1q.292 0 .574-.045M21.5 21.5l-5-5m0 5l5-5"></svg:path></svg:g>`,
})
export class TablerMoodXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
