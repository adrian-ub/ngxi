import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAnalyzeOffIcon],svg[tabler-analyze-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 11a8.1 8.1 0 0 0-6.986-6.918a8.1 8.1 0 0 0-4.31.62M6.321 6.31A8 8 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 13.687 4.676M20 16a1 1 0 0 0-1-1"></svg:path><svg:path d="M4 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5.888 1.87a3 3 0 1 0 4.233 4.252m.595-3.397A3 3 0 0 0 13.29 9.29M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerAnalyzeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
