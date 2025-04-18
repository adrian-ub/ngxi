import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChristmasTreeOffIcon],svg[tabler-christmas-tree-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 5.5L12 3l4 4l-2 1l4 4l-1.5.5M17 17H5l4-4l-3-1l3-3m5 8v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3M3 3l18 18"></svg:path>`,
})
export class TablerChristmasTreeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
