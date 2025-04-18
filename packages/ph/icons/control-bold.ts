import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phControlBoldIcon],svg[ph-control-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 128.49a12 12 0 0 1-17 0L128 65l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"></svg:path>`,
})
export class PhControlBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
