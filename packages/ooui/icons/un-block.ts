import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUnBlockIcon],svg[ooui-un-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.22 0L0 1.22l3.06 3.06a9 9 0 0 0 12.66 12.66L18.78 20L20 18.78zM5 11V9h2.78l2 2zm5-10a9 9 0 0 0-4.26 1.08L12.66 9H15v2h-.34l3.26 3.26A9 9 0 0 0 10 1"></svg:path>`,
})
export class OouiUnBlockIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
