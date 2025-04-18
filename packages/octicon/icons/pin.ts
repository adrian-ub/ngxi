import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconPinIcon],svg[octicon-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5l5-4l3.14 3.14a.5.5 0 0 0 .86-.34V10l3-4.5l1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 0 0-.86.34z" fill="currentColor"></svg:path>`,
})
export class OcticonPinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
