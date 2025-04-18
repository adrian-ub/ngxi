import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiArrowUpIcon],svg[ooui-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 10l1.42 1.41L9 5.83V18h2V5.83l5.59 5.58L18 10l-8-8z"></svg:path>`,
})
export class OouiArrowUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
