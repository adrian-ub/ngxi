import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileDamageLineIcon],svg[ri-file-damage-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9h-5V4H5v7.857l1.5 1.393L10 9.5l3 5l2-2.5l3 3l-3-.5l-2 2.5l-3-4l-3 3.5l-2-1.25V20h14zm2-1v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995z"></svg:path>`,
})
export class RiFileDamageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
