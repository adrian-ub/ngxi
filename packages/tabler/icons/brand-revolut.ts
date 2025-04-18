import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandRevolutIcon],svg[tabler-brand-revolut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 10h3v10H5z"></svg:path><svg:path d="M14.5 4H5v3h9.4a1.5 1.5 0 0 1 0 3H11v4l4 6h4l-5-7h.5a4.5 4.5 0 1 0 0-9"></svg:path></svg:g>`,
})
export class TablerBrandRevolutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
