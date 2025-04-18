import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSmallLongDownIcon],svg[ci-small-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18h-3V2h-2v16H8l4 4l4-4Z"></svg:path>`,
})
export class CiSmallLongDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
