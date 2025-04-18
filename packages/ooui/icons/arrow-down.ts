import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiArrowDownIcon],svg[ooui-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 10l1.42-1.41L9 14.17V2h2v12.17l5.59-5.58L18 10l-8 8z"></svg:path>`,
})
export class OouiArrowDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
