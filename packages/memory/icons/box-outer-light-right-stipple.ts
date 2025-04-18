import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRightStippleIcon],svg[memory-box-outer-light-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3h-1V2h1m1 3h1V4h-1m-1 3h-1V6h1m1 3h1V8h-1m-1 4h-1v-1h1m1 4h1v-1h-1m-1 3h-1v-1h1m1 3h1v-1h-1m-1 3h-1v-1h1m2 2h-1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h1v-1h-1V9h-1V8h1V7h1V6h-1V5h-1V4h1V3h1V2h-1V1h-1V0h1v1h1V0h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1m4 1h-2V0h2Z"></svg:path>`,
})
export class MemoryBoxOuterLightRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
