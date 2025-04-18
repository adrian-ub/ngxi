import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSelectDragIcon],svg[mdi-select-drag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17h4v-4h2v4h4v2h-4v4h-2v-4h-4zm-2 0v2H9v-2zm-4 0v2H5v-2zm12-8v2h-2V9zm0-4v2h-2V5zm-4 0v2h-2V5zm-4 0v2H9V5zM7 5v2H5V5zm0 8v2H5v-2zm0-4v2H5V9z"></svg:path>`,
})
export class MdiSelectDragIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
