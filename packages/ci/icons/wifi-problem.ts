import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciWifiProblemIcon],svg[ci-wifi-problem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.343 14.59a5 5 0 0 1 7.29-.025m-9.484-3.021A8 8 0 0 1 11.96 9m-8.735-.184A12 12 0 0 1 11.959 5M16 9l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-8 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CiWifiProblemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
