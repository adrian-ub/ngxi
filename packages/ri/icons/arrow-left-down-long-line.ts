import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftDownLongLineIcon],svg[ri-arrow-left-down-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.778 5.636l-1.414-1.414L6.93 15.657V10.07h-2v9h9v-2H8.343z"></svg:path>`,
})
export class RiArrowLeftDownLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
