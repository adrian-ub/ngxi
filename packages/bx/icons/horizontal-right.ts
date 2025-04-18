import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxHorizontalRightIcon],svg[bx-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11H5v2h8v3l4-4l-4-4zm6-8h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2z"></svg:path>`,
})
export class BxHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
