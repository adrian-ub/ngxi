import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStackSimpleThinIcon],svg[ph-stack-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 107.47l112 64a4 4 0 0 0 4 0l112-64a4 4 0 0 0 0-6.94l-112-64a4 4 0 0 0-4 0l-112 64a4 4 0 0 0 0 6.94m114-62.86L231.94 104L128 163.39L24.06 104ZM243.47 142a4 4 0 0 1-1.49 5.45l-112 64a4 4 0 0 1-4 0l-112-64a4 4 0 0 1 4-6.94l110 62.86l110-62.86a4 4 0 0 1 5.49 1.49"></svg:path>`,
})
export class PhStackSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
