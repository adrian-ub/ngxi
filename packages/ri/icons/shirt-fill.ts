import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShirtFillIcon],svg[ri-shirt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.998 4v7l5-2.5l5 2.5V4h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4l-4.5-5h9zm1 3.236l-1-.5l-1 .5V20h2zm2 2.764v2h4v-2z"></svg:path>`,
})
export class RiShirtFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
