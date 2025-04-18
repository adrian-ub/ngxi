import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowUpBoxLineIcon],svg[ri-arrow-up-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm7-12.657L6.343 12l1.414 1.414L11 10.172v7.485h2v-7.485l3.243 3.242L17.657 12z"></svg:path>`,
})
export class RiArrowUpBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
