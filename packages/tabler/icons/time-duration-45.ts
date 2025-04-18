import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration45Icon],svg[tabler-time-duration-45-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 15h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2V9h3M7 9v2a1 1 0 0 0 1 1h1m1-3v6M7.5 4.2v.01M4.2 7.5v.01"></svg:path><svg:path d="M3 12a9 9 0 1 0 9-9"></svg:path></svg:g>`,
})
export class TablerTimeDuration45Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
