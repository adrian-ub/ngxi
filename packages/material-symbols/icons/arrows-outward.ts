import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsArrowsOutwardIcon],svg[material-symbols-arrows-outward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 17l-1.4-1.4l2.575-2.6H13v-2h5.175L15.6 8.4L17 7l5 5zM7 17l-5-5l5-5l1.4 1.4L5.825 11H11v2H5.825L8.4 15.6z"></svg:path>`,
})
export class MaterialSymbolsArrowsOutwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
