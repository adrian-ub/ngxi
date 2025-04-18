import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilToggleOnIcon],svg[cil-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 128H144a128 128 0 0 0 0 256h224a128 128 0 0 0 0-256m0 224H144a96 96 0 0 1 0-192h224a96 96 0 0 1 0 192"></svg:path><svg:path fill="currentColor" d="M368 192a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32"></svg:path>`,
})
export class CilToggleOnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
