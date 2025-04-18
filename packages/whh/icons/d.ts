import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDIcon],svg[whh-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H64q-27 0-45.5-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v512q0 106-75 181t-181 75m128-768q0-53-37.5-90.5T512 128H160q-13 0-22.5 9.5T128 160v704q0 13 9.5 22.5T160 896h352q53 0 90.5-37.5T640 768z"></svg:path>`,
})
export class WhhDIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
