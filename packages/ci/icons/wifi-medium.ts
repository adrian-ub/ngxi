import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciWifiMediumIcon],svg[ci-wifi-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.344 14.59a5 5 0 0 1 7.289-.025m-9.484-3.021a8 8 0 0 1 11.664-.042M12 19a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CiWifiMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
