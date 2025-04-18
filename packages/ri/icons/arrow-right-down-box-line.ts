import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDownBoxLineIcon],svg[ri-arrow-right-down-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm11-3H8v-2h4.586L7.293 8.707l1.414-1.414L14 12.586V8h2z"></svg:path>`,
})
export class RiArrowRightDownBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
