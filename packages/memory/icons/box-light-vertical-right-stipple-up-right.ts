import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalRightStippleUpRightIcon],svg[memory-box-light-vertical-right-stipple-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m4 1h-1V5h1m-7 3h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m-9 14h-2V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalRightStippleUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
