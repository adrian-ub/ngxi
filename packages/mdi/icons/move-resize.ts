import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMoveResizeIcon],svg[mdi-move-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v1h1v3H9v1h3V5h-1V2h1V1M9 7c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2M1 9v3h1v-1h3v1h1V9H5v1H2V9m7 0h12v12H9m5-11v1h1v5h-4v-1h-1v3h1v-1h4v2h-1v1h3v-1h-1v-2h3v1h1v-3h-1v1h-3v-5h1v-1"></svg:path>`,
})
export class MdiMoveResizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
