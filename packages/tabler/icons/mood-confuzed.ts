import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodConfuzedIcon],svg[tabler-mood-confuzed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m6-2h.01M15 10h.01"></svg:path><svg:path d="M9.5 16a10 10 0 0 1 6-1.5"></svg:path></svg:g>`,
})
export class TablerMoodConfuzedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
