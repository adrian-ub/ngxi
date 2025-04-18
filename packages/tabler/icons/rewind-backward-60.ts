import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRewindBackward60Icon],svg[tabler-rewind-backward-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.007 16.466A6 6 0 0 0 15 6H4"></svg:path><svg:path d="M7 9L4 6l3-3m5 12.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M9 14H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6"></svg:path></svg:g>`,
})
export class TablerRewindBackward60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
