import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOlympicsIcon],svg[tabler-olympics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M9 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M6 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path></svg:g>`,
})
export class TablerOlympicsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
