import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpRightStippleIcon],svg[memory-box-outer-light-up-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h1V4H3m4 1h1V4H7m6 1h1V4h-1m4 1h1V4h-1M2 7H1V6h1m4 1H5V6h1m5 1h-1V6h1m5 1h-1V6h1m1 3h1V8h-1m-1 4h-1v-1h1m1 4h1v-1h-1m-1 3h-1v-1h1m1 3h1v-1h-1m-1 3h-1v-1h1m2 2h-1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h1v-1h-1V9h-1V8h1V7h1V6h-1V5h-1V4h-1v1h-1v1h-1V5h-1V4h-1v1h-1V4H9v1H8v1H7V5H6V4H5v1H4v1H3V5H2V4H1v1H0V4h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1m4 1h-2V2H0V0h22Z"></svg:path>`,
})
export class MemoryBoxOuterLightUpRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
