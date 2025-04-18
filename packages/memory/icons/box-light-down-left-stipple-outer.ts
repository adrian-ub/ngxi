import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownLeftStippleOuterIcon],svg[memory-box-light-down-left-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1m1 3h1V4H7M6 7H5V6h1m1 3h1V8H7m-1 3H5v-1h1m16 2H10V0h2v10h10M8 15H7v-1h1m5 1h1v-1h-1m4 1h1v-1h-1m1 2h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1H9v-1h1v-1H9v-1H8v-1H7v1H6v-1h1v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h-1v-1h-1v1h-1m-6 2h-1v-1h1m4 1h-1v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightDownLeftStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
