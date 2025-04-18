import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDragMoveFillIcon],svg[ri-drag-move-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l-4-4h8zm0-20l4 4H8zm0 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4M2 12l4-4v8zm20 0l-4 4V8z"></svg:path>`,
})
export class RiDragMoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
