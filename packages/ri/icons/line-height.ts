import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLineHeightIcon],svg[ri-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h10v2H11zM6 7v4H4V7H1l4-4l4 4zm0 10h3l-4 4l-4-4h3v-4h2zm5 1h10v2H11zm-2-7h12v2H9z"></svg:path>`,
})
export class RiLineHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
