import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSmallLongUpIcon],svg[ci-small-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6h3v16h2V6h3l-4-4l-4 4Z"></svg:path>`,
})
export class CiSmallLongUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
