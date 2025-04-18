import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerLeftDownLineIcon],svg[ri-corner-left-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5h9v2h-7v10.172l3.95-3.95l1.414 1.414L11 21l-6.364-6.364l1.414-1.414l3.95 3.95z"></svg:path>`,
})
export class RiCornerLeftDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
