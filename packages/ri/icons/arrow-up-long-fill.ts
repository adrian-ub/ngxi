import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowUpLongFillIcon],svg[ri-arrow-up-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22h2V8.414h5.414L12 2L5.586 8.414H11z"></svg:path>`,
})
export class RiArrowUpLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
