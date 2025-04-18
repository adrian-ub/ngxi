import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAlignLeftIcon],svg[ri-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v2H3zm0 15h14v2H3zm0-5h18v2H3zm0-5h14v2H3z"></svg:path>`,
})
export class RiAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
