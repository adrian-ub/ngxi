import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalUpStippleUpLeftIcon],svg[memory-box-light-horizontal-up-stipple-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1M3 6H2V5h1m4 0h1V4H7M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m13 4H0v-2h10V0h2v10h10Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalUpStippleUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
