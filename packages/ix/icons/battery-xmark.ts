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
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 128v85.333h42.667v85.334h-42.667V384h-384V128zM384 170.667H85.334v170.666H384zm-111.082 16.917l30.165 30.165L264.832 256l38.251 38.251l-30.165 30.165l-38.251-38.251l-38.251 40.384l-30.165-30.165L204.502 256l-38.251-38.251l30.165-30.165l38.251 38.251z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryXmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
