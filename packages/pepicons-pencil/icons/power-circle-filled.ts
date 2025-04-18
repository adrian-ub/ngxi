import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPowerCircleFilledIcon],svg[pepicons-pencil-power-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPowerCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M7.477 8.46a.6.6 0 1 1 .854.842a6.02 6.02 0 0 0-1.731 4.24c0 3.312 2.643 5.992 5.9 5.992s5.9-2.68 5.9-5.992a6.02 6.02 0 0 0-1.731-4.24a.6.6 0 1 1 .854-.842a7.22 7.22 0 0 1 2.077 5.082c0 3.97-3.177 7.192-7.1 7.192s-7.1-3.222-7.1-7.192c0-1.93.756-3.743 2.077-5.082"></svg:path><svg:path d="M11.878 4.25a.6.6 0 0 1 1.2 0v7.085a.6.6 0 0 1-1.2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPowerCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPowerCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
