import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpLeftStippleInnerIcon],svg[memory-box-light-round-up-left-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16h1v-1h-1m3 3h-1v-1h1m-6 2h1v-1h-1m3 3h-1v-1h1m-6 2h-2v-4h1v-3h1v-1h1v-1h1v-1h1v-1h3v-1h4v2h-3v1h-3v1h-1v1h-1v1h-1v3h-1m2 3h-1v-1h1v-1h1v-1h-1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v-1h1v-1h1v1h-1v1h-1v1h-1v1h-1v-1h-1v1h-1v1h1v1h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryBoxLightRoundUpLeftStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
