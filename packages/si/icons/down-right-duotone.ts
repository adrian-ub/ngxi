import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siDownRightDuotoneIcon],svg[si-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 15H9.4A4.4 4.4 0 0 1 5 10.6V5m14 10l-4 4m4-4l-4-4"></svg:path>`,
})
export class SiDownRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
