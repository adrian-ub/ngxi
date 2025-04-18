import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsLayoutBlocksIcon],svg[gridicons-layout-blocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-2V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m-4 14H7v-8h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7V3h10v4h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2zm4-4h-6V9h6z"></svg:path>`,
})
export class GridiconsLayoutBlocksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
