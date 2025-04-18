import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRightHorizontalStippleDownIcon],svg[memory-box-outer-light-right-horizontal-stipple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h1v-1H3m6 1h1v-1H9m4 1h1v-1h-1m4 1h1v-1h-1M2 17H1v-1h1m5 1H6v-1h1m5 1h-1v-1h1m4 1h-1v-1h1m1 3h1v-1h-1m-1 3h-1v-1h1m2 2h-1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1H9v-1H8v-1H7v1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1m4 1h-2V12H0v-2h20V0h2Z"></svg:path>`,
})
export class MemoryBoxOuterLightRightHorizontalStippleDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
