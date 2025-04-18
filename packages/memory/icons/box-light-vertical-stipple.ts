import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalStippleIcon],svg[memory-box-light-vertical-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M7 5h1V4H7m10 2h-1V5h1M6 7H5V6h1m8 2h1V7h-1M7 9h1V8H7m10 3h-1v-1h1M6 12H5v-1h1m8 3h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 17H5v-1h1m8 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V0h2m4 22h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
