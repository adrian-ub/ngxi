import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStickyNote2LineIcon],svg[ri-sticky-note-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.998 21A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V16l-5.003 5zM5 19h10.169L19 15.171V5H5z"></svg:path>`,
})
export class RiStickyNote2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
