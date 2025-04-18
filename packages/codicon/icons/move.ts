import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMoveIcon],svg[codicon-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.232 10.707L8.5 12.44V9h-1v3.44l-1.732-1.733l-.707.707L7.646 14h.708l2.585-2.586zM5.061 3.586l.707.707L7.5 2.56V6h1V2.56l1.732 1.733l.707-.707L8.354 1h-.708zm-.268 1.682L3.06 7H6.5v1H3.06l1.733 1.732l-.707.707L1.5 7.854v-.708l2.586-2.585zM9.5 7h3.44l-1.733-1.732l.707-.707L14.5 7.146v.708l-2.586 2.585l-.707-.707L12.94 8H9.5z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconMoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
