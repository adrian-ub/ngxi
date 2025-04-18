import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRunAboveIcon],svg[codicon-run-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.77 1.01L1 1.42v12l.78.42l9-6v-.83zM2 12.49V2.36l7.6 5.07zM12.15 8h.71l2.5 2.5l-.71.71L13 9.56V15h-1V9.55l-1.65 1.65l-.7-.7z"></svg:path>`,
})
export class CodiconRunAboveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
