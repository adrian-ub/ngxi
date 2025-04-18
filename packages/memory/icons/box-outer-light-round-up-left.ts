import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRoundUpLeftIcon],svg[memory-box-outer-light-round-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 0v2h-5v1h-4v1h-2v1H9v1H8v1H7v1H6v1H5v2H4v2H3v4H2v5H.004v-6H1v-4h1v-2h1V8h1V7h1V6h1V5h1V4h1V3h2V2h2V1h4V0z"></svg:path>`,
})
export class MemoryBoxOuterLightRoundUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
