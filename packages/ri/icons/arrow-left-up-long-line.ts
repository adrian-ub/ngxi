import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftUpLongLineIcon],svg[ri-arrow-left-up-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.778 18.364l-1.414 1.414L6.93 8.343v5.586h-2v-9h9v2H8.343z"></svg:path>`,
})
export class RiArrowLeftUpLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
