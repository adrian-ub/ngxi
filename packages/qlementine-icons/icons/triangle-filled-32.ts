import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsTriangleFilled32Icon],svg[qlementine-icons-triangle-filled-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.4 2.2l-12 24C-.93 28.86.995 32 3.96 32h24c2.97 0 4.89-3.14 3.56-5.8l-12-24c-1.47-2.94-5.65-2.94-7.12 0"></svg:path>`,
})
export class QlementineIconsTriangleFilled32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
