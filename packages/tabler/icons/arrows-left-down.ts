import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowsLeftDownIcon],svg[tabler-arrows-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 3L3 7l4 4"></svg:path><svg:path d="M3 7h11a3 3 0 0 1 3 3v11"></svg:path><svg:path d="m13 17l4 4l4-4"></svg:path></svg:g>`,
})
export class TablerArrowsLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
