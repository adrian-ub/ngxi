import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChristmasTreeIcon],svg[tabler-christmas-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l4 4l-2 1l4 4l-3 1l4 4H5l4-4l-3-1l4-4l-2-1zm2 14v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3"></svg:path>`,
})
export class TablerChristmasTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
