import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDrawingBoxIcon],svg[mdi-drawing-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18h-6v-5.79c-.66.61-1.53.99-2.5.99c-2.04 0-3.7-1.66-3.7-3.7a3.7 3.7 0 0 1 3.7-3.7c2.04 0 3.7 1.66 3.7 3.7c0 .97-.38 1.84-.99 2.5H18m1-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiDrawingBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
