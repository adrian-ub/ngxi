import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCodeIcon],svg[codicon-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.708 5.578L2.061 8.224l2.647 2.646l-.708.708l-3-3V7.87l3-3zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708l3-3V7.87zM4.908 13l.894.448l5-10L9.908 3z"></svg:path>`,
})
export class CodiconCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
