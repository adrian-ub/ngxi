import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAlignTopIcon],svg[ri-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm5 8v10H6V11H3l4-4l4 4zm10 0v10h-2V11h-3l4-4l4 4z"></svg:path>`,
})
export class RiAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
