import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsPinSolidIcon],svg[rivet-icons-pin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0H3v1c0 1.173.294 2.075.606 2.697c.137.275.277.493.394.656v2.175A6 6 0 0 0 2 11v1h5v3a1 1 0 1 0 2 0v-3h5v-1a6 6 0 0 0-2-4.472V4.353c.117-.163.257-.381.394-.656C12.706 3.075 13 2.173 13 1z"></svg:path>`,
})
export class RivetIconsPinSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
