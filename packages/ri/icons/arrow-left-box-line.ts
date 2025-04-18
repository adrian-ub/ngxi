import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftBoxLineIcon],svg[ri-arrow-left-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm1.344-6.999L12 6.344l1.414 1.414l-3.243 3.243h7.485v2h-7.485l3.243 3.243L12 17.658z"></svg:path>`,
})
export class RiArrowLeftBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
