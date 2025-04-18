import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlugChargingIcon],svg[ph-plug-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 56h-48V16a8 8 0 0 0-16 0v40H96V16a8 8 0 0 0-16 0v40H32.55C26.28 56 24 60.78 24 64a8 8 0 0 0 8 8h16v88a40 40 0 0 0 40 40h32v40a8 8 0 0 0 16 0v-40h32a40 40 0 0 0 40-40V72h16a8 8 0 0 0 0-16m-56 128H88a24 24 0 0 1-24-24V72h128v88a24 24 0 0 1-24 24m-17.42-60.56a8 8 0 0 1 .91 7.37l-12 32a8 8 0 0 1-15-5.62l8-21.19H112a8 8 0 0 1-7.49-10.81l12-32a8 8 0 1 1 15 5.62l-8 21.19H144a8 8 0 0 1 6.58 3.44"></svg:path>`,
})
export class PhPlugChargingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
