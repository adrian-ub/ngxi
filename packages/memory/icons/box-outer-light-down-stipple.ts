import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownStippleIcon],svg[memory-box-outer-light-down-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16H2v-1h1m4 1H6v-1h1m5 1h-1v-1h1m5 1h-1v-1h1m4 1h-1v-1h1M4 18h1v-1H4m4 1h1v-1H8m6 1h1v-1h-1m4 1h1v-1h-1m3 2h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-1H5v1H4v-1H3v1H2v-1H1v1H0v-1h1v-1H0v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h-1m1 4H0v-2h22Z"></svg:path>`,
})
export class MemoryBoxOuterLightDownStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
