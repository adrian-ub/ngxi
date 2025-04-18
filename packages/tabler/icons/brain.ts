import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrainIcon],svg[tabler-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-7 0v-1.8"></svg:path><svg:path d="M17.5 16a3.5 3.5 0 0 0 0-7H17"></svg:path><svg:path d="M19 9.3V6.5a3.5 3.5 0 0 0-7 0M6.5 16a3.5 3.5 0 0 1 0-7H7"></svg:path><svg:path d="M5 9.3V6.5a3.5 3.5 0 0 1 7 0v10"></svg:path></svg:g>`,
})
export class TablerBrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
