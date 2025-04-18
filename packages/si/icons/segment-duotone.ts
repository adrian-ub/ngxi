import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSegmentDuotoneIcon],svg[si-segment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 12h8M4 8h16m-8 8h8"></svg:path>`,
})
export class SiSegmentDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
