import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighIcon],svg[ph-battery-vertical-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 56H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhBatteryVerticalHighIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
