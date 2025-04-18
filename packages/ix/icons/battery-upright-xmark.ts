import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightXmarkIcon],svg[ix-battery-upright-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h74.666l.001-42.666h106.666v42.666H384v384H128zM170.667 128v298.667h170.666V128zm16.917 111.083l30.165-30.166L256 247.168l38.251-38.251l30.165 30.166l-38.251 38.25l40.384 38.251l-30.165 30.165L256 307.499l-38.251 38.25l-30.165-30.165l38.251-38.251z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightXmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
