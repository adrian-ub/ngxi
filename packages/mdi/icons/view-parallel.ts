import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewParallelIcon],svg[mdi-view-parallel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3v18h-4V3zm-5 0v18h-4V3zM9 3v18H5V3z"></svg:path>`,
})
export class MdiViewParallelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
