import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerColorFilterIcon],svg[tabler-color-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.58 13.79c.27.68.42 1.43.42 2.21c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6c0-2.76 1.88-5.1 4.42-5.79"></svg:path><svg:path d="M17.58 10.21C20.12 10.9 22 13.24 22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54"></svg:path><svg:path d="M6 8a6 6 0 1 0 12 0A6 6 0 1 0 6 8"></svg:path></svg:g>`,
})
export class TablerColorFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
