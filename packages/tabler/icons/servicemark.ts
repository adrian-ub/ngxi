import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerServicemarkIcon],svg[tabler-servicemark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9H6.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H5m8 0V9l3 4l3-4v6"></svg:path>`,
})
export class TablerServicemarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
