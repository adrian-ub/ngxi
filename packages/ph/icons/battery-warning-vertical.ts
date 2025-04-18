import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalIcon],svg[ph-battery-warning-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 136V96a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m8 24a12 12 0 1 0 12 12a12 12 0 0 0-12-12M96 16h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m104 40v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBatteryWarningVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
