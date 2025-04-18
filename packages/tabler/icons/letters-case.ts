import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLettersCaseIcon],svg[tabler-letters-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="18" cy="16" r="3"></svg:circle><svg:path d="M21 13v6M3 19V9a4 4 0 0 1 4-4a4 4 0 0 1 4 4v10m-8-6h8"></svg:path></svg:g>`,
})
export class TablerLettersCaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
