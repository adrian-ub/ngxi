import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownRightStippleOuterIcon],svg[memory-box-light-down-right-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m-3 3h1V7h-1m3 3h-1V9h1m-3 3h1v-1h-1m3 3h-1v-1h1m-2 2h-1v-1h1M3 15h1v-1H3m4 1h1v-1H7m4 1h1v-1h-1m1 2h-1v-1h-1v-1H9v1H8v1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1H0v-2h10V0h2v12h1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v-1h-1v1h-1v1h1v1h-1M2 17H1v-1h1m4 1H5v-1h1m4 1H9v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightDownRightStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
