import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightLeftStippleIcon],svg[memory-box-outer-light-left-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6V1h1M4 4h1V3H4m3 3H6V5h1M4 8h1V7H4m3 4H6v-1h1m-3 4h1v-1H4m3 3H6v-1h1m-3 3h1v-1H4m3 3H6v-1h1m-5 3H0V0h2m4 22H5v-1H4v1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3V9h1V8H3V7h1V6H3V5h1V4H3V3h1V2H3V1h1V0h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1H5v1H4v1h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1H5v1H4v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxOuterLightLeftStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
