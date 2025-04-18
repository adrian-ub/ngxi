import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandHorizontalFillIcon],svg[ri-expand-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 12l4.95-4.95L5.449 11H10v2H5.448v3.947zM14 13h4.55v3.95L23.5 12l-4.95-4.95V11H14z"></svg:path>`,
})
export class RiExpandHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
