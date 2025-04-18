import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRewindBackward20Icon],svg[tabler-rewind-backward-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.007 16.466A6 6 0 0 0 15 6H4"></svg:path><svg:path d="M7 9L4 6l3-3m5 12.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M6 14h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2"></svg:path></svg:g>`,
})
export class TablerRewindBackward20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
