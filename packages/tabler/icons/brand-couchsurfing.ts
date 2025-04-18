import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCouchsurfingIcon],svg[tabler-brand-couchsurfing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.1 13q4.9 0 7.9-.5c3-.5 4-2 4-3.5a3 3 0 1 0-6 0c0 1.554 1.807 3 3 4s2 2.5 2 3.5a1.5 1.5 0 1 1-3 0c0-2 4-3.5 7-3.5h2.9"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path></svg:g>`,
})
export class TablerBrandCouchsurfingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
