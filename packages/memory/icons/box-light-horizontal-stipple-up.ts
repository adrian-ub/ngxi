import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalStippleUpIcon],svg[memory-box-light-horizontal-stipple-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H2V5h1m4 1H6V5h1m5 1h-1V5h1m5 1h-1V5h1m4 1h-1V5h1M4 8h1V7H4m4 1h1V7H8m6 1h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8H9v1H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m1 4H0v-2h22Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalStippleUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
