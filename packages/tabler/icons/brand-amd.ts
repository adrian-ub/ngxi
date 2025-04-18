import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAmdIcon],svg[tabler-brand-amd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 16V9c0-.566-.434-1-1-1H8L3 3h17c.566 0 1 .434 1 1v17z"></svg:path><svg:path d="M11.293 20.707L16 16H9a1 1 0 0 1-1-1V8l-4.707 4.707a1 1 0 0 0-.293.707V20a1 1 0 0 0 1 1h6.586a1 1 0 0 0 .707-.293"></svg:path></svg:g>`,
})
export class TablerBrandAmdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
