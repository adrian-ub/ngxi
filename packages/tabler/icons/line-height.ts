import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLineHeightIcon],svg[tabler-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 8l3-3l3 3m-6 8l3 3l3-3M6 5v14m7-13h7m-7 6h7m-7 6h7"></svg:path>`,
})
export class TablerLineHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
