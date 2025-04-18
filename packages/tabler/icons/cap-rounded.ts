import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCapRoundedIcon],svg[tabler-cap-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 6h-9a6 6 0 1 0 0 12h9"></svg:path><svg:path d="M13 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0h7"></svg:path></svg:g>`,
})
export class TablerCapRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
