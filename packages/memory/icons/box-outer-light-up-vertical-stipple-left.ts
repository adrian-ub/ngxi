import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpVerticalStippleLeftIcon],svg[memory-box-outer-light-up-vertical-stipple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h1V4H3m4 1h1V4H7M2 7H1V6h1m4 1H5V6h1m1 3h1V8H7m-1 3H5v-1h1m1 3h1v-1H7m-1 4H5v-1h1m1 4h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4H5v1H4v1H3V5H2V4H1v1H0V4h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V2H0V0h22v2H12Z"></svg:path>`,
})
export class MemoryBoxOuterLightUpVerticalStippleLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
