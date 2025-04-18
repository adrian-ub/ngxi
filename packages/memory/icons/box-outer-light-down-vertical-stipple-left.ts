import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownVerticalStippleLeftIcon],svg[memory-box-outer-light-down-vertical-stipple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1m1 3h1V4H7M6 8H5V7h1m1 4h1v-1H7m-1 3H5v-1h1m-3 4H2v-1h1m4 0h1v-1H7m-3 4h1v-1H4m5 2H8v-1H7v1H6v-1H5v1H4v-1H3v1H2v-1H1v1H0v-1h1v-1H0v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1V9h1V8H7V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m13 4H0v-2h10V0h2v20h10Z"></svg:path>`,
})
export class MemoryBoxOuterLightDownVerticalStippleLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
