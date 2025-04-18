import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftDownLineIcon],svg[ri-arrow-left-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 13.589l8.607-8.607l1.414 1.415l-8.607 8.606H18v2H7v-11h2z"></svg:path>`,
})
export class RiArrowLeftDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
