import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiCancelIcon],svg[ooui-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0M2 10a8 8 0 0 1 1.69-4.9L14.9 16.31A8 8 0 0 1 2 10m14.31 4.9L5.1 3.69A8 8 0 0 1 16.31 14.9"></svg:path>`,
})
export class OouiCancelIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
