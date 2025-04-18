import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownLeftStippleInnerIcon],svg[memory-box-light-round-down-left-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3h-1V2h1m2 3h-1V4h1m-5 1h1V4h-1m6 5h-1V8h-1V7h-1v1h-1V7h-1V6h-1V5h-1V4h1V3h-1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h1v1h-1v1h1v1h1V6h1v1h1v1h1V7h1v1h-1m1 4h-4v-1h-3v-1h-1V9h-1V8h-1V7h-1V4h-1V0h2v3h1v3h1v1h1v1h1v1h3v1h3Z"></svg:path>`,
})
export class MemoryBoxLightRoundDownLeftStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
