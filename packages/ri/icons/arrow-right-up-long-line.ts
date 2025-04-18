import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowRightUpLongLineIcon],svg[ri-arrow-right-up-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.636 19.778l-1.414-1.414L15.657 6.93h-5.586v-2h9v9h-2V8.343z"></svg:path>`,
})
export class RiArrowRightUpLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
