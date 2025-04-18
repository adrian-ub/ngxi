import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDownLongLineIcon],svg[ri-arrow-right-down-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.222 5.636l1.414-1.414L17.07 15.657V10.07h2v9h-9v-2h5.586z"></svg:path>`,
})
export class RiArrowRightDownLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
