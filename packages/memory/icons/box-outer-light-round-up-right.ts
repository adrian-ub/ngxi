import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRoundUpRightIcon],svg[memory-box-outer-light-round-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-2v-5h-1v-4h-1v-2h-1V9h-1V8h-1V7h-1V6h-1V5h-2V4H9V3H5V2H.004V0H6v1h4v1h2v1h2v1h1v1h1v1h1v1h1v1h1v2h1v2h1v4h1z"></svg:path>`,
})
export class MemoryBoxOuterLightRoundUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
