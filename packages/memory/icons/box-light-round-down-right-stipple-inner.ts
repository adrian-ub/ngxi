import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownRightStippleInnerIcon],svg[memory-box-light-round-down-right-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2H4V1h1M2 5H1V4h1m4 0h1V3H6M3 7h1V6H3M1 9H0V8h1V7h1V6h1V5h1v1h1V5h1V4H5V3h1V2h1V1h1V0h1v1H8v1H7v1h1v1H7v1H6v1H5v1H4v1H3V7H2v1H1m3 4H0v-2h3V9h3V8h1V7h1V6h1V3h1V0h2v4h-1v3h-1v1H9v1H8v1H7v1H4Z"></svg:path>`,
})
export class MemoryBoxLightRoundDownRightStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
