import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSelectionDragIcon],svg[mdi-selection-drag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h3v-3h2v3h3v2h-3v3h-2v-3h-3zm-2 0v2H9v-2zm-5 0v2H3v-4h2v2zm-4-4v-3h2v3zm0-5V4h4v2H5v2zm6-4h3v2H9zm6 0h4v4h-2V6h-2zm4 6v2h-2v-2z"></svg:path>`,
})
export class MdiSelectionDragIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
