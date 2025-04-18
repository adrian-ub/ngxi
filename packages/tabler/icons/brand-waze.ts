import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandWazeIcon],svg[tabler-brand-waze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.66 17.52A7 7 0 0 1 3 13c2 0 3-1 3-2.51C6 6.57 8.25 3 13.38 3C18 3 21 6.51 21 11a8.08 8.08 0 0 1-3.39 6.62M10 18.69a17.3 17.3 0 0 0 3.33.3h.54"></svg:path><svg:path d="M14 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M16 9h.01M11 9h.01"></svg:path></svg:g>`,
})
export class TablerBrandWazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
