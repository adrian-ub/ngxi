import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCherryIcon],svg[tabler-cherry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M9 13c.366-2 1.866-3.873 4.5-5.6M17 15c-1.333-2.333-2.333-5.333-1-9"></svg:path><svg:path d="M5 6q5.5-4 11 0q-5.5 4-11 0"></svg:path></svg:g>`,
})
export class TablerCherryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
