import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCapStraightIcon],svg[tabler-cap-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0h12"></svg:path><svg:path d="M20 6H8a2 2 0 0 0-2 2v2m0 4v2a2 2 0 0 0 2 2h12"></svg:path></svg:g>`,
})
export class TablerCapStraightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
