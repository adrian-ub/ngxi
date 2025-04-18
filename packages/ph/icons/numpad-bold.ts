import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumpadBoldIcon],svg[ph-numpad-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 48a20 20 0 1 1-20-20a20 20 0 0 1 20 20m44-20a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 40a20 20 0 1 0-20-20a20 20 0 0 0 20 20M64 84a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20a20 20 0 0 0-20-20M64 140a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 56a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64-56a20 20 0 1 0 20 20a20 20 0 0 0-20-20"></svg:path>`,
})
export class PhNumpadBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
