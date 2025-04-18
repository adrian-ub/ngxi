import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiDraggableIcon],svg[ooui-draggable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h16v2H2zm0-4h16v2H2zm11 8H7l3 3zM7 5h6l-3-3z"></svg:path>`,
})
export class OouiDraggableIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
