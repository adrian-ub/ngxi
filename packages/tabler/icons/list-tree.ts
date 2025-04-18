import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerListTreeIcon],svg[tabler-list-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h11m-8 6h8m-5 6h5M5 6v.01M8 12v.01M11 18v.01"></svg:path>`,
})
export class TablerListTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
