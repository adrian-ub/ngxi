import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpLeftStippleOuterIcon],svg[memory-box-light-round-up-left-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6h-1V5h1m4 1h-1V5h1m-7 2h-1V6h1m-2 3h-1V8h1m6 0h1V7h-1m-3 2h1V8h-1m-6 4H8v-1h1m-2 5H6v-1h1m0 4h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1h1v-1H8v-1h1v-1h1v-1h1v-1h-1v-1h1v1h1v-1h1V9h1V8h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1v1h-1V8h-1v1h-1V8h-1v1h-1v1h-1V9h-1v1h-1v1h-1v1h-1v1h-1v1H9v1h1v1H9v1H8v1h1v1H8v1h1v1H8m4 1h-2v-4h1v-3h1v-1h1v-1h1v-1h1v-1h3v-1h4v2h-3v1h-3v1h-1v1h-1v1h-1v3h-1Z"></svg:path>`,
})
export class MemoryBoxLightRoundUpLeftStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
