import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiBlockIcon],svg[ooui-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1a9 9 0 1 0 9 9a9 9 0 0 0-9-9m5 10H5V9h10z"></svg:path>`,
})
export class OouiBlockIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
