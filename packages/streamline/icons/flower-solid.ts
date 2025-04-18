import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFlowerSolidIcon],svg[streamline-flower-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.822 1.112a3.08 3.08 0 0 1 5.256 2.08a3.07 3.07 0 0 1 3.767 1.992l-.475.156l.475-.155a3.05 3.05 0 0 1-1.86 3.813a3.04 3.04 0 0 1-.753 4.168a3.09 3.09 0 0 1-4.227-.581a3.09 3.09 0 0 1-5.043-.291A3.04 3.04 0 0 1 2.022 9a3.062 3.062 0 0 1 1.9-5.817a3.08 3.08 0 0 1 .9-2.07ZM9.205 7.26c0 1.21-.987 2.19-2.205 2.19a2.2 2.2 0 0 1-2.205-2.19c0-1.21.987-2.19 2.205-2.19s2.205.98 2.205 2.19" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFlowerSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
