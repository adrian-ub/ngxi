import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconHeartFilledIcon],svg[codicon-heart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.88 4.78a3.5 3.5 0 0 0-.37-.9a3.2 3.2 0 0 0-.6-.79a3.8 3.8 0 0 0-1.21-.81a3.74 3.74 0 0 0-2.84 0a4 4 0 0 0-1.16.75l-.05.06l-.65.65l-.65-.65l-.05-.06a4 4 0 0 0-1.16-.75a3.74 3.74 0 0 0-2.84 0a3.8 3.8 0 0 0-1.21.81a3.55 3.55 0 0 0-.97 1.69a3.8 3.8 0 0 0-.12 1c0 .318.04.634.12.94a4 4 0 0 0 .36.89a3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.232.44-.498.6-.79A3.6 3.6 0 0 0 15 5.78a3.8 3.8 0 0 0-.12-1"></svg:path>`,
})
export class CodiconHeartFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
