import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTentIcon],svg[tabler-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 14l4 6h6L12 4L3 20h6l4-6"></svg:path>`,
})
export class TablerTentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
