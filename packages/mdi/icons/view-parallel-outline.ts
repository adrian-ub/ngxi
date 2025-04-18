import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewParallelOutlineIcon],svg[mdi-view-parallel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5v18h14zm-2 16h-2V5h2zm-4 0h-2V5h2zM7 5h2v14H7z"></svg:path>`,
})
export class MdiViewParallelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
