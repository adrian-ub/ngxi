import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCompassSolidIcon],svg[teenyicons-compass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.618 9.382l1.255-2.51l2.509-1.254l-1.255 2.51z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m10.947-2.776a.5.5 0 0 0-.67-.671l-4 2a.5.5 0 0 0-.224.223l-2 4a.5.5 0 0 0 .67.671l4-2a.5.5 0 0 0 .224-.223z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsCompassSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
