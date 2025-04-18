import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSkipForwardIcon],svg[tabler-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="icon-tabler" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 6v12a2 2 0 0 0 2.75 1.84l8.25-6.1a2 2 0 0 0 0-3.5l-8.25-6.1A2 2 0 0 0 4 5.89"></svg:path><svg:path d="M20 4v16"></svg:path></svg:g>`,
})
export class TablerSkipForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
