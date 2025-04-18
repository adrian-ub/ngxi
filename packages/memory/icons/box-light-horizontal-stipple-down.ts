import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalStippleDownIcon],svg[memory-box-light-horizontal-stipple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12H0v-2h22M3 15h1v-1H3m4 1h1v-1H7m6 1h1v-1h-1m4 1h1v-1h-1m5 2h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v-1H9v1H8v1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1M2 17H1v-1h1m4 1H5v-1h1m5 1h-1v-1h1m5 1h-1v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalStippleDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
