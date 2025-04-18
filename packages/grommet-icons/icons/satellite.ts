import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSatelliteIcon],svg[grommet-icons-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M7 17C2.97 12.794 2.97 6.118 7 2l15 15c-4.118 4.03-10.794 4.03-15 0Zm0 0c-3.295 0-6 2.95-6 6h12c0-1.139-.37-2.034-1-3m3-11l4-4zm5.5-8a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z"></svg:path>`,
})
export class GrommetIconsSatelliteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
