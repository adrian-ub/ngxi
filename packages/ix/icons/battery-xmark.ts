import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryXmarkIcon],svg[ix-battery-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 128v74.666h42.667v106.667h-42.667V384h-384V128zM384 170.667H85.334v170.666H384zm-111.082 16.917l30.165 30.165L264.833 256l38.25 38.25l-30.165 30.166l-38.251-38.25l-38.25 40.383l-30.166-30.165L204.501 256l-38.25-38.25l30.165-30.166l38.251 38.25z"></svg:path>`,
})
export class IxBatteryXmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
