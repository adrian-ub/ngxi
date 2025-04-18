import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerToggleLeftIcon],svg[tabler-toggle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class TablerToggleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
