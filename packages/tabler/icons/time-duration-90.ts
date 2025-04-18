import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration90Icon],svg[tabler-time-duration-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 14.25c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H11m3-1.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path></svg:g>`,
})
export class TablerTimeDuration90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
