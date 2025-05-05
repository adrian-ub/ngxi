import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryThreeQuarterIcon],svg[ix-battery-three-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.667 213.333H128.001v85.334h170.666z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 213.333h-42.667V128h-384v256h384v-85.333h42.667zm-85.333 128H85.334V170.667H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryThreeQuarterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
