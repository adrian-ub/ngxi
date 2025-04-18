import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibNextdoorIcon],svg[cib-nextdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.99 13.089L16 3.297l-5.495 3.365V3.297H5.5v6.427L.005 13.089L2.62 17.36l2.88-1.755v13.099h21V15.605l2.875 1.755z"></svg:path>`,
})
export class CibNextdoorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
