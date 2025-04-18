import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSkipBackIcon],svg[tabler-skip-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="icon-tabler" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M20 18V6a2 2 0 0 0-2.75-1.84L9 10.26a2 2 0 0 0 0 3.5l8.25 6.1A2 2 0 0 0 20 18.11"></svg:path><svg:path d="M4 20V4"></svg:path></svg:g>`,
})
export class TablerSkipBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
