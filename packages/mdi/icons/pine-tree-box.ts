import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPineTreeBoxIcon],svg[mdi-pine-tree-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 17h2v-2h5l-4-4h3l-4-4h3l-4-4l-4 4h3l-4 4h3l-4 4h5z"></svg:path>`,
})
export class MdiPineTreeBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
